function tabMove($selectedContent, $toHideContent) {
    const $show = document.querySelector('.show');
    console.log('클릭')
    //console.log($selectedContent, $toHideContent)
    if ($show.id !== $selectedContent.id) {
        $selectedContent.classList.remove('hide');
        $selectedContent.classList.add('show');
        $toHideContent.classList.remove('show');
        $toHideContent.classList.add('hide');
    }
}

export function useTabButton(e) {
    let $selectedContent = '';
    if (e.target.id === 'crew-tab') {
        //$selectedContent = document.querySelector('#crew-tab-select-course');
        $selectedContent = document.querySelector('#crew-tab-content');
        const $teamTabContent = document.querySelector('#team-tab-content')
        tabMove($selectedContent, $teamTabContent);
    }
    if (e.target.id === 'team-tab') {
        console.log('클릭')
        $selectedContent = document.querySelector('#team-tab-content');
        const $crewTabContent = document.querySelector('#crew-tab-content');
        tabMove($selectedContent, $crewTabContent);
    }
}