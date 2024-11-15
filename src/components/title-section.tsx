interface Props {
  subTitle: string
  title: string
}

export default function TitleSection({ subTitle, title }: Props) {
  return (
    <div className="space-y-1 mb-14">
      <span className="font-semibold text-sm md:text-leading text-white opacity-70">
        {subTitle}
      </span>
      <h2 className="font-poppins text-mobile-title md:text-5xl">{title}</h2>
    </div>
  )
}
