import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "../utils/common";

export const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = ({ className, children, ...props }: DialogPrimitive.DialogPortalProps) => (
    <DialogPrimitive.Portal className={cn(className)} {...props}>
        <div className="fixed inset-0 z-50 flex items-start justify-center sm:items-center">
            {children}
        </div>
    </DialogPrimitive.Portal>
);
DialogPortal.displayName = DialogPrimitive.Portal.displayName;

const DialogOverlay = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
        ref={ref}
        className={cn(
            "fixed inset-0 z-50 bg-black bg-opacity-80 transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
            className
        )}
        {...props}
    />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

export const DialogContent = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content
            ref={ref}
            className={cn(
                "fixed z-50 flex w-full flex-col space-y-2 rounded-b-lg border border-gray-100 bg-white p-2 shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-2xl sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",
                className
            )}
            {...props}
        >
            {children}
            <DialogPrimitive.Close className="absolute right-2 top-2 rounded-md p-1 text-gray-900 opacity-70 outline-none ring-0 transition-opacity hover:bg-gray-100 hover:opacity-100 focus:outline-none disabled:pointer-events-none ">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
        </DialogPrimitive.Content>
    </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)}
        {...props}
    />
);
DialogHeader.displayName = "DialogHeader";

interface Props {
    title: React.ReactNode;
    trigger: React.ReactNode;
    className: string;
    children: React.ReactNode;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ className, trigger, title, children, open, setOpen }: Props) {
    return (
        <Dialog open={open} onOpenChange={(o) => setOpen(o)}>
            <DialogTrigger>{trigger}</DialogTrigger>
            <DialogContent className={className}>
                <DialogHeader className="max-h-min">{title}</DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
}
