

export default function Header() {
  return (
    <div className="app-header absolute top-2 left-0 w-[30vw] h-[13vh] flex items-center scale-[0.8] ">
      <div className="header-logo-hexagon bg-app_teal_light h-full w-[20%] flex items-center justify-center">
        <img src='/vectors/yes-chef-robot.svg' className="object-scale-down scale-[0.9]" />
      </div>
      <h1 className="logo-text ml-4 text-6xl font-black text-white ">
        Yes Chef!
      </h1>


    </div>
  )
}