
//////////////////////// set pagination for a repeater //////////////////////////////////////
export function setPagination(){
    let repeaterData = $w("#repeaterAvailableVideos").data;
    let items_per_page = 3;
    let total_pages = Math.ceil(repeaterData.length / items_per_page)

    $w("#paginationBarAvailableVideos").totalPages = total_pages;

    $w("#paginationBarAvailableVideos").currentPage = 1;

    $w("#repeaterAvailableVideos").data = repeaterData.slice(0, 3);

    $w("#paginationBarAvailableVideos").onClick((event, $w) => {
        let start_position = (($w("#paginationBarAvailableVideos").currentPage - 1) * items_per_page);
        let end_position = start_position + items_per_page

        $w("#repeaterAvailableVideos").data = repeaterData.slice(start_position, end_position);
    });
}
