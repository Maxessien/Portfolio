import Image from "next/image"


const AppHeader = () => {
  return (
    <header>
        <div>
            <Image className="w-10" src="/max-logo.png" alt="brand logo" />
            <h1>Max Essien</h1>
        </div>
    </header>
  )
}

export default AppHeader