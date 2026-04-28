import { EmailContent, RecordEmailContent, sendEmail } from "@/src/utils/emailjs";
import {
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
} from "react";
import { useForm } from "react-hook-form";
import Button from "../reusable/Button";
import { useMutation } from "@tanstack/react-query";
import { ContactHeader } from "./Contact";
import { toast } from "react-toastify";

const FieldWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full flex flex-col gap-2 items-start justify-center max-w-135">
      {children}
    </div>
  );
};

const Label = ({ attrs, children }: { attrs?: LabelHTMLAttributes<HTMLLabelElement>, children: ReactNode }) => {
  return <label className="text-lg font-medium" {...attrs}>{children}</label>;
};

const Input = ({ attrs }: { attrs?: InputHTMLAttributes<HTMLInputElement> }) => {
  return (
    <input
      className="w-full px-3 py-2 text-base font-medium shadow-[inset_0px_0px_10px_-7px_var(--text-primary)] rounded-md"
      type="text"
      {...attrs}
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
  return <p className="w-full text-red-500 text-sm font-medium" {...attrs}>{errorMessage}</p>;
};

const SendMessageSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailContent>({
    defaultValues: { email: "", fullName: "", message: "" },
  });

  const {mutateAsync, isPending} = useMutation({mutationFn: (data: EmailContent)=>sendEmail(data as RecordEmailContent), onSuccess: ()=>toast.success("Message Sent"), onError: ()=>toast.error("Message not sent, Try again later")})

  return (
    <section className="w-full px-3 py-5 rounded-md shadow-[0px_0px_10px_-7px_var(--text-primary)] lg:px-5">
        <ContactHeader title="Send Me a Message" />
      <form className="space-y-3" onSubmit={handleSubmit((data)=>mutateAsync(data))}>
        <FieldWrapper>
            <Label attrs={{htmlFor: "full_name"}}>Full Name</Label>
            <Input attrs={{id: "full_name", ...register("fullName", {required: "Full name is required"})}} />
            {errors.fullName && <Errors errorMessage={errors.fullName.message || ""} />}
        </FieldWrapper>

        <FieldWrapper>
            <Label attrs={{htmlFor: "email"}}>Email</Label>
            <Input attrs={{id: "email", ...register("email", {required: "Email is required", pattern: {
                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email address",
                      }})}} />
            {errors.email && <Errors errorMessage={errors.email.message || ""} />}
        </FieldWrapper>

        <FieldWrapper>
            <Label attrs={{htmlFor: "message"}}>Message</Label>
            <Input attrs={{id: "message", ...register("message", {required: "Message is required"})}} />
            {errors.message && <Errors errorMessage={errors.message.message || ""} />}
        </FieldWrapper>

        <Button attrs={{type: "submit", disabled: isPending}} width="w-full" rounded="rounded-md">{isPending ? "Sending..." : "Send Message"}</Button>
      </form>
    </section>
  );
};

export default SendMessageSection;
