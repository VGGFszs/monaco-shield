import Image from "next/image"

const MonacoShieldLogo = () => {
  return (
    <Image
      src="/images/monaco-shield-logo.png"
      alt="MonacoShield Logo"
      width={40}
      height={40}
      className="object-contain"
    />
  )
}

export default MonacoShieldLogo
