
// redirect if not authorized
if(!localStorage.getItem('user')){
    window.location.href = './login.html';
}
let user = JSON.parse(localStorage.getItem('user'));


const navbar = `
<!--<nav class="navbar navbar-expand-lg navbar-light bg-light my-main-navbar">-->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse change--div"
        id="navbarTogglerDemo01"
      >
        <a class="navbar-brand" href="../HTML/main.html">AQua Water</a>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <span class="nav-link nav-bar-userName">Hello, ${user.name}</span>
          </li>
          <li class="nav-item">
            <span class="nav-link active">
              # <span class="user--rank">${user.rank}</span>
            </span>
          </li>
          <li class="nav-item">
            <span class="nav-link active">
              Balance: <span class="user--balance">${user.balance} 💧</span>
            </span>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0 search-bar">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0 searchUsersBtn" type="submit">
            Search
          </button>
        </form>
        <!-- Icons -->
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link setting-icon" href="./setting.html">
              <i class="fa fa-cog"></i>
            </a>
          </li>
        </ul>
      </div>
<!--    </nav>-->
`;
export default navbar;
