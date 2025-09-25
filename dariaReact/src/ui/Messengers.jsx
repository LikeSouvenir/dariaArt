export default function Messengers(){

    const logos = [
        {href: "", src: "./src/assets/logo/instagram.svg", alt: "instagram"},
        {href: "", src: "./src/assets/logo/icons8-vk.svg", alt: "vk"},
        {href: "", src: "./src/assets/logo/telegram.svg", alt: "telegram"},
        {href: "", src: "./src/assets/logo/whatsapp.svg", alt: "whatsapp"},
    ];
    return (
        <>
            {logos.map((item, index) => (
                // костыль с логотипом ВК
                <img className= {item.alt === "vk" ? "p-lg-1" : "p-lg-2" }
                     style={{"height": '50px'}}
                     height="100%"
                     src={item.src}
                     key={index}
                     alt={item.alt}/>
            ))}
        </>
    )
}