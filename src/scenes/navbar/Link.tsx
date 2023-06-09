import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: string;ü
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage,
}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "")
 id="ourclasses"  
  return (
    <AnchorLink
    className={`${selectedPage === lowerCasePage ? "text-primary-500":""}
    transition duration-500 hover:text-primary-300
    `}
    href={`#${lowerCasePage}`}
    onClick={}
    >
        {page}
    </AnchorLink>
  )
}

export default Link