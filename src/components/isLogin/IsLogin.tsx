import { Fragment } from "react/jsx-runtime"

function IsLogin() {
  return (
    <Fragment>
        <div className="flex w-full  flex-nowrap  md:flex-wrap  items-center justify-center">
            <div className="w-full">
                <div className="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
                <div className="h-48 bg-gray-300"></div>
                <div className="px-6 py-4">
                    <div className="h-6 bg-gray-300 mb-2"></div>
                    <div className="h-4 bg-gray-300 w-2/3"></div>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <div className="h-4 bg-gray-300 w-1/4 mb-2"></div>
                    <div className="h-4 bg-gray-300 w-1/2"></div>
                </div>
                </div>
            </div>
        </div>           
    </Fragment>
  )
}
export default IsLogin