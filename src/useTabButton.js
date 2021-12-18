function tabMove($selectedContent) {
    const $show = document.querySelector('.show');
    console.log('클릭')
    console.log($selectedContent)
    if ($show.id !== $selectedContent.id) {
        $selectedContent.classList.remove('hide');
        $selectedContent.classList.add('show');
        $show.classList.remove('show');
        $show.classList.add('hide');
    }
}

export function useTabButton(e) {
    let $selectedContent = '';
    if (e.target.id === 'crew-tab') {
        $selectedContent = document.querySelector('#crew-tab-content');
        tabMove($selectedContent);
    }
    if (e.target.id === 'team-tab') {
        console.log('클릭')
        $selectedContent = document.querySelector('#team-tab-content');
        tabMove($selectedContent);
    }
}