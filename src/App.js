import './App.css';
import SortNV from './components/SortNV';
import DanhSachNV from './components/DanhSachNV';
import FormNV from './components/FormNV';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        {/* Sidebar Holder */}
        <nav id="sidebar">
          <div className="sidebar-header">
            <h3>Bootstrap Sidebar</h3>
            <strong>BS</strong>
          </div>
          <ul className="list-unstyled components">
            <li className="active">
              <a href="#homeSubmenu">
                <i className="fa fa-home" />
                Home
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-briefcase" />
                About
              </a>
              <a href="#pageSubmenu">
                <i className="fa fa-files-o" />
                Pages
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-link" />
                Portfolio
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-paperclip" />
                FAQ
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-paper-plane" />
                Contact
              </a>
            </li>
          </ul>
          <ul className="list-unstyled CTAs">
            <li><a href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">Download source</a>
            </li>
            <li><a href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">Back to article</a></li>
          </ul>
        </nav>
        {/* Page Content Holder */}
        <div id="content">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" id="sidebarCollapse" className="btn btn-info navbar-btn">
                  <i className="glyphicon glyphicon-align-left" />
                  <span>Toggle Sidebar</span>
                </button>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#">Page</a></li>
                  <li><a href="#">Page</a></li>
                  <li><a href="#">Page</a></li>
                  <li><a href="#">Page</a></li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container">
            <div className="card text-center">
              {/* Header */}
              <div className="card-header myCardHeader">
                <div className="row">
                  <div className="col-md-6">
                    <h3 className="text-left text-primary font-weight-bold">Danh sách nhân viên</h3>
                  </div>
                  <div className="col-md-6 text-right">
                    <button className="btn btn-primary" id="btnThem" data-toggle="modal" data-target="#myModal">Thêm nhân viên</button>
                  </div>
                </div>
              </div>
              {/* Body */}
              <div className="card-body">
                <SortNV />
                <DanhSachNV />
              </div>
              {/* Footer */}
              <div className="card-footer myCardFooter">
                <nav>
                  <ul className="pagination justify-content-center" id="ulPhanTrang">
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* THE MODAL */}
    <FormNV />
    </div>
  );
}

export default App;
