import React from 'react'

const Footer = () => {
    const socialMedia = [
    { href: "#", icon: <Twitter size={16} /> },
    { href: "#", icon: <Instagram size={16} /> },
    { href: "#", icon: <Facebook size={16} /> },
  ];

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/hotels", label: "Hotel" },
    { href: "/trips", label: "Trip" },
    { href: "/rent-a-cars", label: "Rent a car" },
    { href: "/contack", label: "Contack" },
  ]
  return (
    <div>Footer</div>
  )
}

export default Footer