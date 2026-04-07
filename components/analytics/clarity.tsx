import Script from "next/script"

const CLARITY_TOKEN = process.env.NEXT_PUBLIC_CLARITY_TOKEN

export function MicrosoftClarity() {
  if (!CLARITY_TOKEN) return null

  return (
    <Script id="microsoft-clarity" strategy="lazyOnload">
      {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window,document,"clarity","script","${CLARITY_TOKEN}");`}
    </Script>
  )
}
