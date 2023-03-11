export default function SearchBar(props) {
    return (
        <div className="h-fit w-full bg-gray-800">
            <div className="flex w-full justify-center py-2 my-2 items-center">
                <input
                    className="rounded-full h-6 p-2"
                    value={props.value}
                    onChange={props.handleSearch}
                    type="text"
                    placeholder={props.Placeholder}
                />
            </div>
        </div>
    );
}
