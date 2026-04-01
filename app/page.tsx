import Image from "next/image";

const profile = {
  name: "Potato Traveler",
  headline: "Photographer · Videographer · Software",
  image: "/author.jpeg",
};

const links = [
  { href: "http://me.potatotraveler.com/", text: "Photography Website" },
  { href: "https://instagram.com/potato.traveler/", text: "Instagram" },
  { href: "https://twitter.com/traveler_potato", text: "Twitter / X" },
  { href: "https://unsplash.com/@potato_traveler", text: "Unsplash" },
  { href: "mailto:potatotraveler@gmail.com", text: "Email" },
  { href: "http://portfolio.gardlt.io/work/", text: "Gallery" },
  { href: "https://pixabay.com/users/potato_traveler-14397780/", text: "Pixabay" },
];

const equipment = [
  { name: "Sony Alpha 7 III", type: "Camera" },
  { name: "Insta360 One R", type: "Action Cam" },
  { name: "Insta360 Go 2", type: "Action Cam" },
];

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#f9f8f6] px-4 py-16">
      <div className="flex w-full max-w-sm flex-col items-center gap-8">

        {/* Profile image */}
        <div className="h-24 w-24 overflow-hidden rounded-full">
          <Image
            src={profile.image}
            alt={profile.name}
            width={96}
            height={96}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        {/* Name & headline */}
        <div className="text-center">
          <h1
            className="text-2xl text-stone-900"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 600, letterSpacing: "0.04em" }}
          >
            {profile.name}
          </h1>
          <p
            className="mt-2 text-xs tracking-widest text-stone-500 uppercase"
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 500 }}
          >
            {profile.headline}
          </p>
        </div>

        {/* Links — outline style matching the portfolio site */}
        <div className="flex w-full flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center justify-center border border-stone-300 px-6 py-3 text-xs tracking-widest text-stone-800 uppercase transition-all duration-300 hover:border-stone-800 hover:text-stone-900"
              style={{ fontFamily: "var(--font-montserrat)", fontWeight: 600 }}
            >
              {link.text}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-8 border-t border-stone-300" />

        {/* Equipment */}
        <div className="w-full text-center">
          <h2
            className="mb-5 text-xs tracking-widest text-stone-500 uppercase"
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 500 }}
          >
            Equipment
          </h2>
          <div className="flex flex-col gap-4">
            {equipment.map((item) => (
              <div key={item.name} className="flex items-baseline justify-between border-b border-stone-200 pb-3">
                <span
                  className="text-sm text-stone-800"
                  style={{ fontFamily: "var(--font-playfair)", fontWeight: 500 }}
                >
                  {item.name}
                </span>
                <span
                  className="text-xs tracking-widest text-stone-500 uppercase"
                  style={{ fontFamily: "var(--font-montserrat)", fontWeight: 500 }}
                >
                  {item.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p
          className="mt-4 text-xs tracking-wider text-stone-400 uppercase"
          style={{ fontFamily: "var(--font-montserrat)", fontWeight: 400 }}
        >
          &copy; German Rivera De La Torre
        </p>
      </div>
    </main>
  );
}
