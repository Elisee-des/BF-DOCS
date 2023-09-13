import React from 'react'

function AccueilPage() {
  return (
    <React.Fragment>
            <div className="container-fluid">

<div className="row">
    <div className="col-12">
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0">Project List</h4>

            <div className="page-title-right">
                <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item"><a href="#">Projects</a></li>
                    <li className="breadcrumb-item active">Project List</li>
                </ol>
            </div>

        </div>
    </div>
</div>

<div className="row g-4 mb-3">
    <div className="col-sm-auto">
        <div>
            <a href="apps-projects-create.html" className="btn btn-success"><i className="ri-add-line align-bottom me-1"></i> Add New</a>
        </div>
    </div>
    <div className="col-sm">
        <div className="d-flex justify-content-sm-end gap-2">
            <div className="search-box ms-2">
                <input type="text" className="form-control" placeholder="Search..."/>
                <i className="ri-search-line search-icon"></i>
            </div>

            {/* <select className="form-control w-md" data-choices data-choices-search-false>
                <option value="All">All</option>
                <option value="Today">Today</option>
                <option value="Yesterday" selected>Yesterday</option>
                <option value="Last 7 Days">Last 7 Days</option>
                <option value="Last 30 Days">Last 30 Days</option>
                <option value="This Month">This Month</option>
                <option value="Last Year">Last Year</option>
            </select> */}
        </div>
    </div>
</div>

<div className="row">
    <div className="col-xxl-3 col-sm-6 project-card">
        <div className="card card-height-100">
            <div className="card-body">
                <div className="d-flex flex-column h-100">
                    <div className="d-flex">
                        <div className="flex-grow-1">
                            <p className="text-muted mb-4">Updated 3hrs ago</p>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="d-flex gap-1 align-items-center">
                                <button type="button" className="btn avatar-xs mt-n1 p-0 favourite-btn">
                                    <span className="avatar-title bg-transparent fs-15">
                                        <i className="ri-star-fill"></i>
                                    </span>
                                </button>
                                <div className="dropdown">
                                    <button className="btn btn-link text-muted p-1 mt-n2 py-0 text-decoration-none fs-15" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        <i data-feather="more-horizontal" className="icon-sm"></i>
                                    </button>

                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a className="dropdown-item" href="apps-projects-overview.html"><i className="ri-eye-fill align-bottom me-2 text-muted"></i> View</a>
                                        <a className="dropdown-item" href="apps-projects-create.html"><i className="ri-pencil-fill align-bottom me-2 text-muted"></i> Edit</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#removeProjectModal"><i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Remove</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mb-2">
                        <div className="flex-shrink-0 me-3">
                            <div className="avatar-sm">
                                <span className="avatar-title bg-soft-warning rounded p-2">
                                    <img src="../images/brands/slack.png" alt="" className="img-fluid p-1"/>
                                </span>
                            </div>
                        </div>
                        <div className="flex-grow-1">
                            <h5 className="mb-1 fs-15"><a href="apps-projects-overview.html" className="text-dark">Slack brand logo design</a></h5>
                            <p className="text-muted text-truncate-two-lines mb-3">Create a Brand logo design for a velzon admin.</p>
                        </div>
                    </div>
                    <div className="mt-auto">
                        <div className="d-flex mb-2">
                            <div className="flex-grow-1">
                                <div>Tasks</div>
                            </div>
                            <div className="flex-shrink-0">
                                <div><i className="ri-list-check align-bottom me-1 text-muted"></i> 18/42</div>
                            </div>
                        </div>
                        <div className="progress progress-sm animated-progress">
                            <div className="progress-bar bg-success" role="progressbar" aria-valuenow="34" aria-valuemin="0" aria-valuemax="100" style={{width: "34%"}}></div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="card-footer bg-transparent border-top-dashed py-2">
                <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                        <div className="avatar-group">
                            <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Darline Williams">
                                <div className="avatar-xxs">
                                    <img src="../images/users/avatar-2.jpg" alt="" className="rounded-circle img-fluid"/>
                                </div>
                            </a>
                            <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Add Members">
                                <div className="avatar-xxs">
                                    <div className="avatar-title fs-16 rounded-circle bg-light border-dashed border text-primary">
                                        +
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                        <div className="text-muted">
                            <i className="ri-calendar-event-fill me-1 align-bottom"></i> 10 Jul, 2021
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>

    <div className="col-xxl-3 col-sm-6 project-card">
        <div className="card card-height-100">
            <div className="card-body">
                <div className="d-flex flex-column h-100">
                    <div className="d-flex">
                        <div className="flex-grow-1">
                            <p className="text-muted mb-4">Last update : 08 May</p>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="d-flex gap-1 align-items-center">
                                <button type="button" className="btn avatar-xs mt-n1 p-0 favourite-btn active">
                                    <span className="avatar-title bg-transparent fs-15">
                                        <i className="ri-star-fill"></i>
                                    </span>
                                </button>
                                <div className="dropdown">
                                    <button className="btn btn-link text-muted p-1 mt-n2 py-0 text-decoration-none fs-15" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        <i data-feather="more-horizontal" className="icon-sm"></i>
                                    </button>

                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a className="dropdown-item" href="apps-projects-overview.html"><i className="ri-eye-fill align-bottom me-2 text-muted"></i> View</a>
                                        <a className="dropdown-item" href="apps-projects-create.html"><i className="ri-pencil-fill align-bottom me-2 text-muted"></i> Edit</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#removeProjectModal"><i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Remove</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mb-2">
                        <div className="flex-shrink-0 me-3">
                            <div className="avatar-sm">
                                <span className="avatar-title bg-soft-danger rounded p-2">
                                    <img src="../images/brands/dribbble.png" alt="" className="img-fluid p-1"/>
                                </span>
                            </div>
                        </div>
                        <div className="flex-grow-1">
                            <h5 className="mb-1 fs-15"><a href="apps-projects-overview.html" className="text-dark">Redesign - Landing page</a></h5>
                            <p className="text-muted text-truncate-two-lines mb-3">Resign a landing page design. as per abc minimal design.</p>
                        </div>
                    </div>
                    <div className="mt-auto">
                        <div className="d-flex mb-2">
                            <div className="flex-grow-1">
                                <div>Tasks</div>
                            </div>
                            <div className="flex-shrink-0">
                                <div><i className="ri-list-check align-bottom me-1 text-muted"></i> 22/56</div>
                            </div>
                        </div>
                        <div className="progress progress-sm animated-progress">
                            <div className="progress-bar bg-success" role="progressbar" aria-valuenow="54" aria-valuemin="0" aria-valuemax="100" style={{width: "54%"}}></div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="card-footer bg-transparent border-top-dashed py-2">
                <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                        <div className="avatar-group">
                            <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Brent Gonzalez">
                                <div className="avatar-xxs">
                                    <img src="../images/users/avatar-3.jpg" alt="" className="rounded-circle img-fluid"/>
                                </div>
                            </a>
                            <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Sylvia Wright">
                                <div className="avatar-xxs">
                                    <div className="avatar-title rounded-circle bg-secondary">
                                        S
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Ellen Smith">
                                <div className="avatar-xxs">
                                    <img src="../images/users/avatar-4.jpg" alt="" className="rounded-circle img-fluid"/>
                                </div>
                            </a>
                            <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Add Members">
                                <div className="avatar-xxs">
                                    <div className="avatar-title fs-16 rounded-circle bg-light border-dashed border text-primary">
                                        +
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                        <div className="text-muted">
                            <i className="ri-calendar-event-fill me-1 align-bottom"></i> 18 May, 2021
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>

    <div className="col-xxl-3 col-sm-6 project-card">
        <div className="card card-height-100">
            <div className="card-body">
                <div className="d-flex flex-column h-100">
                    <div className="d-flex">
                        <div className="flex-grow-1">
                            <p className="text-muted mb-4">Updated 2hrs ago</p>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="d-flex gap-1 align-items-center">
                                <button type="button" className="btn avatar-xs mt-n1 p-0 favourite-btn active">
                                    <span className="avatar-title bg-transparent fs-15">
                                        <i className="ri-star-fill"></i>
                                    </span>
                                </button>
                                <div className="dropdown">
                                    <button className="btn btn-link text-muted p-1 mt-n2 py-0 text-decoration-none fs-15" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        <i data-feather="more-horizontal" className="icon-sm"></i>
                                    </button>

                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a className="dropdown-item" href="apps-projects-overview.html"><i className="ri-eye-fill align-bottom me-2 text-muted"></i> View</a>
                                        <a className="dropdown-item" href="apps-projects-create.html"><i className="ri-pencil-fill align-bottom me-2 text-muted"></i> Edit</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#removeProjectModal"><i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Remove</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mb-2">
                        <div className="flex-shrink-0 me-3">
                            <div className="avatar-sm">
                                <span className="avatar-title bg-soft-success rounded p-2">
                                    <img src="../images/brands/mail_chimp.png" alt="" className="img-fluid p-1"/>
                                </span>
                            </div>
                        </div>
                        <div className="flex-grow-1">
                            <h5 className="mb-1 fs-15"><a href="apps-projects-overview.html" className="text-dark">Chat Application</a></h5>
                            <p className="text-muted text-truncate-two-lines mb-3">Create a Chat application for business messaging needs. Collaborate efficiently with secure direct messages and group chats.</p>
                        </div>
                    </div>
                    <div className="mt-auto">
                        <div className="d-flex mb-2">
                            <div className="flex-grow-1">
                                <div>Tasks</div>
                            </div>
                            <div className="flex-shrink-0">
                                <div><i className="ri-list-check align-bottom me-1 text-muted"></i> 14/20</div>
                            </div>
                        </div>
                        <div className="progress progress-sm animated-progress">
                            <div className="progress-bar bg-success" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{width: "65%"}}></div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="card-footer bg-transparent border-top-dashed py-2">
                <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                        <div className="avatar-group">
                            <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Jeffrey Salazar">
                                <div className="avatar-xxs">
                                    <img src="../images/users/avatar-5.jpg" alt="" className="rounded-circle img-fluid"/>
                                </div>
                            </a>
                            <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Mark Williams">
                                <div className="avatar-xxs">
                                    <div className="avatar-title rounded-circle bg-warning">
                                        M
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Add Members">
                                <div className="avatar-xxs">
                                    <div className="avatar-title fs-16 rounded-circle bg-light border-dashed border text-primary">
                                        +
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                        <div className="text-muted">
                            <i className="ri-calendar-event-fill me-1 align-bottom"></i> 21 Feb, 2021
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>

    <div className="col-xxl-3 col-sm-6 project-card">
        <div className="card card-height-100">
            <div className="card-body">
                <div className="d-flex flex-column h-100">
                    <div className="d-flex">
                        <div className="flex-grow-1">
                            <p className="text-muted mb-4">Last update : 21 Jun</p>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="d-flex gap-1 align-items-center">
                                <button type="button" className="btn avatar-xs mt-n1 p-0 favourite-btn">
                                    <span className="avatar-title bg-transparent fs-15">
                                        <i className="ri-star-fill"></i>
                                    </span>
                                </button>
                                <div className="dropdown">
                                    <button className="btn btn-link text-muted p-1 mt-n2 py-0 text-decoration-none fs-15" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        <i data-feather="more-horizontal" className="icon-sm"></i>
                                    </button>

                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a className="dropdown-item" href="apps-projects-overview.html"><i className="ri-eye-fill align-bottom me-2 text-muted"></i> View</a>
                                        <a className="dropdown-item" href="apps-projects-create.html"><i className="ri-pencil-fill align-bottom me-2 text-muted"></i> Edit</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#removeProjectModal"><i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Remove</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mb-2">
                        <div className="flex-shrink-0 me-3">
                            <div className="avatar-sm">
                                <span className="avatar-title bg-soft-info rounded p-2">
                                    <img src="../images/brands/dropbox.png" alt="" className="img-fluid p-1"/>
                                </span>
                            </div>
                        </div>
                        <div className="flex-grow-1">
                            <h5 className="mb-1 fs-15"><a href="apps-projects-overview.html" className="text-dark">Project App</a></h5>
                            <p className="text-muted text-truncate-two-lines mb-3">Create a project application for a project management and task management.</p>
                        </div>
                    </div>

                    <div className="mt-auto">
                        <div className="d-flex mb-2">
                            <div className="flex-grow-1">
                                <div>Tasks</div>
                            </div>
                            <div className="flex-shrink-0">
                                <div><i className="ri-list-check align-bottom me-1 text-muted"></i> 20/34</div>
                            </div>
                        </div>
                        <div className="progress progress-sm animated-progress">
                            <div className="progress-bar bg-success" role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100" style={{width: "78%"}}></div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="card-footer bg-transparent border-top-dashed py-2">
                <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                        <div className="avatar-group">
                            <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Kristin Turpin">
                                <div className="avatar-xxs">
                                    <div className="avatar-title rounded-circle bg-info">
                                        K
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Mary Leavitt">
                                <div className="avatar-xxs">
                                    <div className="avatar-title rounded-circle bg-danger">
                                        M
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Add Members">
                                <div className="avatar-xxs">
                                    <div className="avatar-title fs-16 rounded-circle bg-light border-dashed border text-primary">
                                        +
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                        <div className="text-muted">
                            <i className="ri-calendar-event-fill me-1 align-bottom"></i> 03 Aug, 2021
                        </div>
                    </div>

                </div>

            </div>
        </div>
        
    </div>
</div>

<div className="row g-0 text-center text-sm-start align-items-center mb-4">
    <div className="col-sm-6">
        <div>
            <p className="mb-sm-0 text-muted">Showing <span className="fw-semibold">1</span> to <span className="fw-semibold">10</span> of <span className="fw-semibold text-decoration-underline">12</span> entries</p>
        </div>
    </div>
    <div className="col-sm-6">
        <ul className="pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
            <li className="page-item disabled">
                <a href="#" className="page-link">Previous</a>
            </li>
            <li className="page-item active">
                <a href="#" className="page-link">1</a>
            </li>
            <li className="page-item ">
                <a href="#" className="page-link">2</a>
            </li>
            <li className="page-item">
                <a href="#" className="page-link">3</a>
            </li>
            <li className="page-item">
                <a href="#" className="page-link">4</a>
            </li>
            <li className="page-item">
                <a href="#" className="page-link">5</a>
            </li>
            <li className="page-item">
                <a href="#" className="page-link">Next</a>
            </li>
        </ul>
    </div>
</div>
</div>
    </React.Fragment>
  )
}

export default AccueilPage