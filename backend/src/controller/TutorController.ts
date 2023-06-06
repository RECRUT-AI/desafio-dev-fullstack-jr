import { Request, Response } from "express";
import { TutorBusiness } from "../business/TutorBusiness";
import { ITutor } from "../entities/Tutor";
import Joi from "joi";
import {
  handleRequestError,
  resolveJoiValidationError,
} from "../errors/errorHandler";
import { InvalidBodyError } from "../errors/InvalidBodyError";

export class TutorController {
  constructor(private tutorBusiness: TutorBusiness) {}

  public createTutor = async (req: Request, res: Response) => {
    const input: ITutor = req.body;

    const validateParams = (params: any) => {
      return Joi.object()
        .keys({
          name: Joi.string().min(3).max(30).required(),
          phone: Joi.string().min(3).max(30).required(),
        })
        .required()
        .validateAsync(params);
    };

    try {
      await validateParams(input);
    } catch (error) {
      const message = resolveJoiValidationError(error);

      const parsedError = await handleRequestError(
        new InvalidBodyError(message)
      );
      return res.status(parsedError.status).send(parsedError.data);
    }

    try {
      const response = await this.tutorBusiness.createTutor(input);

      res.status(201).send(response);
    } catch (error) {
      const parsedError = await handleRequestError(error);
      return res.status(parsedError.status).send(parsedError.data);
    }
  };

  public getAllTutors = async (req: Request, res: Response) => {
    try {
      const response = await this.tutorBusiness.getAllTutors();

      res.status(200).send(response);
    } catch (error) {
      const parsedError = await handleRequestError(error);
      return res.status(parsedError.status).send(parsedError.data);
    }
  };

  public getTutorById = async (req: Request, res: Response) => {
    const input: number = Number(req.params?.id);

    const validateParams = (params: any) => {
      return Joi.number().required().validateAsync(params);
    };

    try {
      await validateParams(input);
    } catch (error) {
      const message = resolveJoiValidationError(error);

      const parsedError = await handleRequestError(
        new InvalidBodyError(message)
      );
      return res.status(parsedError.status).send(parsedError.data);
    }

    try {
      const response = await this.tutorBusiness.getTutorById(input);

      res.status(200).send(response);
    } catch (error) {
      const parsedError = await handleRequestError(error);
      return res.status(parsedError.status).send(parsedError.data);
    }
  };

  public updateTutor = async (req: Request, res: Response) => {
    const input: ITutor = req.body;

    const validateParams = (params: any) => {
      return Joi.object()
        .keys({
          id: Joi.number().required(),
          name: Joi.string().min(3).max(30),
          phone: Joi.string().min(3).max(30),
        })
        .required()
        .validateAsync(params);
    };

    try {
      await validateParams(input);
    } catch (error) {
      const message = resolveJoiValidationError(error);

      const parsedError = await handleRequestError(
        new InvalidBodyError(message)
      );
      return res.status(parsedError.status).send(parsedError.data);
    }

    try {
      const response = await this.tutorBusiness.updateTutor(input);

      res.status(200).send(response);
    } catch (error) {
      const parsedError = await handleRequestError(error);
      return res.status(parsedError.status).send(parsedError.data);
    }
  };

  public deleteTutor = async (req: Request, res: Response) => {
    const input: number = Number(req.params?.id);

    const validateParams = (params: any) => {
      return Joi.number().required().validateAsync(params);
    };

    try {
      await validateParams(input);
    } catch (error) {
      const message = resolveJoiValidationError(error);

      const parsedError = await handleRequestError(
        new InvalidBodyError(message)
      );
      return res.status(parsedError.status).send(parsedError.data);
    }

    try {
      const response = await this.tutorBusiness.deleteTutor(input);

      res.status(200).send(response);
    } catch (error) {
      const parsedError = await handleRequestError(error);
      return res.status(parsedError.status).send(parsedError.data);
    }
  };
}
