import { Infinity as InfinityIcon, ChevronDown, ArrowUp } from "lucide-react"

type Model = {
  name: string
  credits: number
}

export const Models4Illustration = () => {
  const models: Model[] = [
    { name: "Gemini", credits: 2 },
    { name: "Open AI", credits: 5 },
    { name: "Deepseek", credits: 3 },
    { name: "Mistral AI", credits: 4 },
    { name: "Qwen", credits: 6 },
  ]
  return (
    <div aria-hidden className="relative min-w-xs">
      <div className="flex flex-col gap-4 perspective-dramatic">
        <div className="rotate-x-4">
          <div className="relative mr-10 -mb-10 ml-auto flex max-w-[calc(100%-7.5rem)] flex-col rounded-xl bg-illustration p-1 shadow-lg ring-1 shadow-black/6.5 ring-border-illustration">
            {models.map((model, index) => (
              <div
                key={index}
                className="flex origin-bottom cursor-default items-center gap-2.5 rounded-lg px-3 py-1.5 select-none not-hover:text-muted-foreground hover:bg-foreground/5 [&>svg]:size-5"
              >
                <span className="text-sm">{model.name}</span>
                <span className="ml-auto text-xs text-muted-foreground/75">
                  {model.credits}x
                </span>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-background/75 p-4 ring-1 ring-border-illustration">
            <div className="h-7 text-xs text-muted-foreground">
              Plan, Build anything...
            </div>
            <div className="flex h-5 justify-between">
              <div className="flex">
                <div className="flex h-full items-center rounded-full bg-foreground/5 px-2.5 text-xs text-muted-foreground">
                  <InfinityIcon className="size-3.5 shrink-0 opacity-75" />
                  <span className="ml-1">Agent</span>
                </div>

                <div className="flex cursor-pointer items-center gap-2 rounded-full px-2.5 text-xs text-foreground">
                  Claude Opus 4.5 <ChevronDown className="size-3" />
                </div>
              </div>

              <div className="flex size-5 rounded-full bg-foreground/10">
                <ArrowUp className="m-auto size-3 opacity-75" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
