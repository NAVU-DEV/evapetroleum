export default function Pagination(props) {
    return (
        <div className="flex h-fit justify-between">
            <div>
                <p>
                    Shows {props.From} - {props.To} data
                </p>
            </div>

            <div className="flex gap-2 h-fit items-center">
                {props.currentPage != 1 && (
                    <a
                        className="cursor-pointer"
                        onClick={() => props.setPage(props.currentPage - 1)}
                    >
                        <i className="fa-solid fa-backward"></i>
                    </a>
                )}
                <p>{props.currentPage}</p>
                {props.currentPage != props.LastPage && (
                    <a
                        className="cursor-pointer"
                        onClick={() => props.setPage(props.currentPage + 1)}
                    >
                        <i className="fa-solid fa-forward"></i>
                    </a>
                )}
            </div>
        </div>
    );
}
