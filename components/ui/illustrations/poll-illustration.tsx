import Image from "next/image"

export const PollIllustration = () => {
  return (
    <div aria-hidden className="relative w-full px-5 select-none">
      <div className="relative w-full space-y-3 py-6 before:absolute before:inset-y-0 before:w-px before:bg-foreground/15 before:mask-y-from-75%">
        <div className="pl-5">
          <div className="text-xs text-muted-foreground">06 AM</div>
          <div className="relative mt-0.5 text-sm font-medium text-foreground before:absolute before:inset-y-0 before:-left-[22px] before:my-auto before:size-[5px] before:rounded-full before:border before:border-muted-foreground before:bg-background before:ring before:ring-background">
            Poll Created
          </div>
        </div>
        <div className="relative -mx-5 rounded-2xl border border-transparent bg-illustration p-2 text-xs shadow-md ring-1 shadow-black/6.5 ring-border-illustration">
          <div className="ml-7 text-xs text-muted-foreground">12 PM</div>
          <div className="ml-7 flex py-1.5">
            <div className="flex items-center gap-1">
              {[
                {
                  src: "https://avatars.githubusercontent.com/u/47919550?v=4",
                  alt: "Méschac Irung",
                },
                {
                  src: "https://avatars.githubusercontent.com/u/31113941?v=4",
                  alt: "Bernard Ngandu",
                },
                {
                  src: "https://avatars.githubusercontent.com/u/68236786?v=4",
                  alt: "Théo Balick",
                },
                {
                  src: "https://avatars.githubusercontent.com/u/99137927?v=4",
                  alt: "Glodie Lukose",
                },
              ].map((avatar, index) => (
                <div
                  key={index}
                  className="size-6 rounded-full border bg-background p-0.5 shadow shadow-zinc-950/5 *:rounded-full"
                >
                  <Image
                    src={avatar.src}
                    className="aspect-square rounded-[calc(var(--avatar-radius)-2px)] object-cover"
                    alt={avatar.alt}
                    width="46"
                    height="46"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-0.5 ml-7 text-sm font-medium before:absolute before:inset-y-0 before:-left-[19px] before:my-auto before:size-[5px] before:rounded-full before:border before:border-primary before:bg-background before:ring before:ring-background">
            +50 Users voted
          </div>
        </div>
        <div className="pl-5">
          <div className="text-xs text-muted-foreground">12:30 PM</div>
          <div className="relative mt-0.5 text-sm font-medium text-foreground before:absolute before:inset-y-0 before:-left-[22px] before:my-auto before:size-[5px] before:rounded-full before:border before:border-muted-foreground before:bg-background before:ring before:ring-background">
            Poll Closed
          </div>
        </div>
      </div>
    </div>
  )
}
