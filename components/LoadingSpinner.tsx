export default function LoadingSpinner() {
    return (
        <div className="flex justify-center items-center flex-col py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-dashed"></div>
            <p className=" text-blue-500 mt-4 font-bold">Searching for the best cars, just for you</p>
        </div>
    );
}
