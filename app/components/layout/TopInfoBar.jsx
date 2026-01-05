export default function TopInfoBar() {
  return (
    <div className="bg-black border-b border-gray-900 py-2 hidden md:block">
      <div className="container-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a 
              href="tel:+18005551234" 
              className="text-gray-400 hover:text-red-500 text-sm transition-colors"
            >
              📞 +1 (800) 555-1234
            </a>
            <span className="text-gray-600 text-sm">|</span>
            <span className="text-gray-400 text-sm">
              🕒 Mon-Fri: 5AM-11PM | Sat-Sun: 7AM-9PM
            </span>
          </div>
          
          <a 
            href="#contact"
            className="text-red-500 hover:text-red-400 font-semibold text-sm transition-colors"
          >
            Get in Touch →
          </a>
        </div>
      </div>
    </div>
  )
}