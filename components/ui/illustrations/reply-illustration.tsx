import { cn } from "@/lib/utils"
import { AtSign, Paperclip, Smile } from "lucide-react"

export const ReplyIllustration = ({ className }: { className?: string }) => {
  return (
    <div
      aria-hidden
      className={cn(
        "mt-12 flex origin-bottom flex-col space-y-4 rounded-2xl border border-transparent bg-illustration px-4 pt-4 pb-2 shadow-md ring-1 shadow-black/6.5 ring-border-illustration transition-all duration-300",
        className
      )}
    >
      <p className="text-sm font-medium text-primary">
        @Bernard{" "}
        <span className="font-normal text-muted-foreground">
          Shared 2 invoices
        </span>
      </p>

      <div className="-ml-1.5 flex text-muted-foreground *:hover:text-foreground">
        <div className="flex size-7 rounded-full hover:bg-muted hover:text-foreground">
          <AtSign className="m-auto size-4" />
        </div>
        <div className="flex size-7 rounded-full hover:bg-muted hover:text-foreground">
          <Smile className="m-auto size-4" />
        </div>
        <div className="flex size-7 rounded-full hover:bg-muted hover:text-foreground">
          <Paperclip className="m-auto size-4" />
        </div>
      </div>
    </div>
  )
}
