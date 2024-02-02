const Header = () => {
  return (
    <div className="flex flex-col gap-5">
        <span className="">{import.meta.env.VITE_API_URL}</span>
      <span className="text-3xl font-bold">TEST WORLD!</span>
    </div>
  )
}

export default Header
