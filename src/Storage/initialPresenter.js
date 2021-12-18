export const InitialPresenter = function () {
    const $app = document.getElementById("app");

    this.init = () => {
        $app.innerHTML += header;
    };
    const header = `<header>
    <h1>우테코 크루와 팀 매칭 관리 보드</h1>
    <nav>
        <ul>
            <li>
                <button>크루 관리</button>
            </li>
            <li>
                <button>팀 매칭 관리</button>
            </li>
        </ul>
    </nav>
</header>`;
    this.init();
};
