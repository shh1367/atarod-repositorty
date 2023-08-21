const TaskItems =() =>{
    return (
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
    )
}
export default TaskItems;