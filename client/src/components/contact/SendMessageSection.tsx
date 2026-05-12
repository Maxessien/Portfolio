import {
  EmailContent,
  RecordEmailContent,
  sendEmail,
} from "@/src/utils/emailjs";
import { useMutation } from "@tanstack/react-query";
import {
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
} from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Button from "../reusable/Button";
import { ContactHeader } from "./Contact";

const FieldWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full flex flex-col gap-2 items-start justify-center">
      {children}
    </div>
  );
};

const Label = ({
  attrs,
  children,
}: {
  attrs?: LabelHTMLAttributes<HTMLLabelElement>;
  children: ReactNode;
}) => {
  return (
    <label
      className="text-sm font-bold text-(--text-primary-light) uppercase tracking-wider"
      {...attrs}
    >
      {children}
    </label>
  );
};

const Input = ({
  attrs,
  isTextArea = false,
}: {
  attrs?:
    | InputHTMLAttributes<HTMLInputElement>
    | HTMLAttributes<HTMLTextAreaElement>;
  isTextArea?: boolean;
}) => {
  const className =
    "w-full px-4 py-3 bg-(--main-primary) border border-(--main-secondary-light) focus:border-(--text-secondary) focus:ring-2 focus:ring-(--text-secondary) focus:ring-opacity-20 outline-none rounded-xl text-base font-medium text-(--text-primary) transition-all duration-300 placeholder:text-(--text-secondary-light)";

  if (isTextArea) {
    return (
      <textarea
        className={`${className} resize-y min-h-30`}
        {...(attrs as HTMLAttributes<HTMLTextAreaElement>)}
      />
    );
  }
  return (
    <input
      className={className}
      type="text"
      {...(attrs as InputHTMLAttributes<HTMLInputElement>)}
    />
  );
};

const Errors = ({
  attrs,
  errorMessage,
}: {
  errorMessage: string;
  attrs?: HTMLAttributes<HTMLParagraphElement>;
}) => {
  return (
    <p className="w-full text-red-500 text-sm font-medium mt-1" {...attrs}>
      {errorMessage}
    </p>
  );
};

const SendMessageSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailContent>({
    defaultValues: { email: "", fullName: "", message: "" },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: EmailContent) => sendEmail(data as RecordEmailContent),
    onSuccess: () => toast.success("Message Sent"),
    onError: () => toast.error("Message not sent, Try again later"),
  });

  return (
    <div className="w-full p-6 md:p-10 bg-(--main-primary-light) rounded-3xl border border-(--main-secondary-light) shadow-xl h-full">
      <ContactHeader title="Send Me a Message" />
      <form
        className="space-y-6"
        onSubmit={handleSubmit((data) => mutateAsync(data))}
      >
        <FieldWrapper>
          <Label attrs={{ htmlFor: "full_name" }}>Full Name</Label>
          <Input
            attrs={{
              id: "full_name",
              placeholder: "John Doe",
              ...register("fullName", { required: "Full name is required" }),
            }}
          />
          {errors.fullName && (
            <Errors errorMessage={errors.fullName.message || ""} />
          )}
        </FieldWrapper>

        <FieldWrapper>
          <Label attrs={{ htmlFor: "email" }}>Email Address</Label>
          <Input
            attrs={{
              id: "email",
              placeholder: "johndoe@example.com",
              ...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              }),
            }}
          />
          {errors.email && <Errors errorMessage={errors.email.message || ""} />}
        </FieldWrapper>

        <FieldWrapper>
          <Label attrs={{ htmlFor: "message" }}>Message</Label>
          <Input
            isTextArea
            attrs={{
              id: "message",
              placeholder: "How can I help you?",
              ...register("message", { required: "Message is required" }),
            }}
          />
          {errors.message && (
            <Errors errorMessage={errors.message.message || ""} />
          )}
        </FieldWrapper>

        <div className="pt-2">
          <Button
            attrs={{ type: "submit", disabled: isPending }}
            width="w-full"
            rounded="rounded-xl p-4 text-lg font-bold shadow-md hover:shadow-lg transition-all"
          >
            {isPending ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMessageSection;
