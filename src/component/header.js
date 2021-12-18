const Header = (tabs) => {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.innerHTML = '우테코 크루와 팀 매칭 관리 보드';
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    tabs.forEach(element => {
      li.appendChild(element);
    });
    ul.appendChild(li);
    nav.appendChild(ul);
    header.append(h1, nav);
    return header;
  };
  
  export default Header;