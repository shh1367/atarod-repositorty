import TopItems from "./TopItem";

function App() {
  return (
    <div className="container w-100 h-100 p-4">
      <div className="row h-100 justify-content-center align-align-items-start">
        <div className="col-12 col-md-8 col-lg-6 bg-light shadow rounded-3 p-4 h-fit">
          <TopItems />

          <ul className="list-group m-0 p-0 mt-2">
            <li className="list-group-item d-flex justify-content-between">
              کارشماره 1
              <span>
                <i className="me-3 pointer fa fa-check text-success transition_200 text_hover_shadow"></i>
                <i className="me-3 pointer fa fa-times text-warning transition_200 text_hover_shadow"></i>
                <i className="me-3 pointer fa fa-trash text-danger transition_200 text_hover_shadow"></i>
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              کارشماره 2
              <span>
                <i className="me-3 pointer fa fa-check text-success transition_200 text_hover_shadow"></i>
                <i className="me-3 pointer fa fa-times text-warning transition_200 text_hover_shadow"></i>
                <i className="me-3 pointer fa fa-trash text-danger transition_200 text_hover_shadow"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
