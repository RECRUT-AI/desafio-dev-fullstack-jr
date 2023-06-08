import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/documentTitle";

type Props = {};

export default function PageError({}: Props) {
    useDocumentTitle("Something went wrong");

    return (
        <div className="bg-skin-base flex h-screen w-screen flex-col items-center justify-center space-y-4">
            <img src="error.svg" alt="" width={384} height={384} />
            <p className="text-skin-base text-4xl font-semibold">Oops, that our bad :/</p>
            <p className="text-skin-muted text-base">
                Looks like something went wrong, to fix this please try first to go back to home, if
                that doesn't work, your data is probably corrupted.
            </p>
            <div className="flex flex-row items-center space-x-2">
                <Link to={"/"} className="button secondary">
                    Back to home
                </Link>
            </div>
        </div>
    );
}
