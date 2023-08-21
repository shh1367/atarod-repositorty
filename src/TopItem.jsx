import { Fragment } from "react";

const TopItems = () => {
  return (
    <Fragment>
      <h4 className="text-center text-info text-shadow">
        اپلیکیشن مدیریت برنامه ها
      </h4>
      <form>
        <div className="form-group d-flex">
          <input type="text" className="form-control" />
          <button type="submit" className="btn btn-success me-1">
            ثبت
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default TopItems;
