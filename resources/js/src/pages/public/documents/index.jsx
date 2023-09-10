import React from 'react'

function index() {
  return (
    <>
        <div class="page-content">
                <div class="container-fluid">

                    <div class="tasks-board mb-3" id="kanbanboard">
                        <div class="tasks-list">
                            <div class="d-flex mb-3">
                                <div class="flex-grow-1">
                                    <h6 class="fs-14 text-uppercase fw-semibold mb-0">Unassigned <small class="badge bg-success align-bottom ms-1 totaltask-badge">2</small></h6>
                                </div>
                                <div class="flex-shrink-0">
                                    <div class="dropdown card-header-dropdown">
                                        <a class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span class="fw-medium text-muted fs-12">Priority<i class="mdi mdi-chevron-down ms-1"></i></span>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <a class="dropdown-item" href="#">Priority</a>
                                            <a class="dropdown-item" href="#">Date Added</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-simplebar class="tasks-wrapper px-3 mx-n3">
                                <div id="unassigned-task" class="tasks">
                                    <div class="card tasks-box">
                                        <div class="card-body">
                                            <div class="d-flex mb-2">
 												<h6 class="fs-15 mb-0 flex-grow-1 text-truncate task-title"><a href="apps-tasks-details.html" class="d-block">Profile Page Structure</a></h6>
                                                <div class="dropdown">
                                                    <a href="javascript:void(0);" class="text-muted" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false"><i class="ri-more-fill"></i></a>
                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                                        <li><a class="dropdown-item" href="apps-tasks-details.html"><i class="ri-eye-fill align-bottom me-2 text-muted"></i> View</a></li>
                                                        <li><a class="dropdown-item" href="#"><i class="ri-edit-2-line align-bottom me-2 text-muted"></i> Edit</a></li>
                                                        <li><a class="dropdown-item" data-bs-toggle="modal" href="#deleteRecordModal"><i class="ri-delete-bin-5-line align-bottom me-2 text-muted"></i> Delete</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p class="text-muted">Profile Page means a web page accessible to the public or to guests.</p>
                                            <div class="mb-3">
                                                <div class="d-flex mb-1">
                                                    <div class="flex-grow-1">
                                                        <h6 class="text-muted mb-0"><span class="text-secondary">15%</span> of 100%</h6>
                                                    </div>
                                                    <div class="flex-shrink-0">
                                                        <span class="text-muted">03 Jan, 2022</span>
                                                    </div>
                                                </div>
                                                <div class="progress rounded-3 progress-sm">
                                                    <div class="progress-bar bg-danger" role="progressbar" style={{width: "15%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center">
                                                <div class="flex-grow-1">
                                                    <span class="badge badge-soft-primary">Admin</span>
                                                </div>
                                                <div class="flex-shrink-0">
                                                    <div class="avatar-group">
                                                        <a href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Alexis">
                                                            <img src="assets/images/users/avatar-6.jpg" alt="" class="rounded-circle avatar-xxs"/>
                                                        </a>
                                                        <a href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Nancy">
                                                            <img src="assets/images/users/avatar-5.jpg" alt="" class="rounded-circle avatar-xxs"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-footer border-top-dashed">
                                            <div class="d-flex">
                                                <div class="flex-grow-1">
                                                    <h6 class="text-muted mb-0">#VL2436</h6>
                                                </div>
                                                <div class="flex-shrink-0">
                                                    <ul class="link-inline mb-0">
                                                        <li class="list-inline-item">
                                                            <a href="javascript:void(0)" class="text-muted"><i class="ri-eye-line align-bottom"></i> 04</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="javascript:void(0)" class="text-muted"><i class="ri-question-answer-line align-bottom"></i> 19</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="javascript:void(0)" class="text-muted"><i class="ri-attachment-2 align-bottom"></i> 02</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card tasks-box">
                                        <div class="card-body">
                                            <div class="d-flex mb-2">
                                                <div class="flex-grow-1">
                                               <h6 class="fs-15 mb-0 text-truncate task-title"><a href="apps-tasks-details.html" class="d-block">Velzon - Admin Layout Design</a></h6>
                                                </div>
                                                <div class="flex-shrink-0">
                                                    <a href="javascript:void(0);" class="text-muted" id="dropdownMenuLink12" data-bs-toggle="dropdown" aria-expanded="false"><i class="ri-more-fill"></i></a>
                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink12">
                                                        <li><a class="dropdown-item" href="apps-tasks-details.html"><i class="ri-eye-fill align-bottom me-2 text-muted"></i> View</a></li>
                                                        <li><a class="dropdown-item" href="#"><i class="ri-edit-2-line align-bottom me-2 text-muted"></i> Edit</a></li>
                                                        <li><a class="dropdown-item" data-bs-toggle="modal" href="#deleteRecordModal"><i class="ri-delete-bin-5-line align-bottom me-2 text-muted"></i> Delete</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p class="text-muted">The dashboard is the front page of the Administration UI.</p>
                                            <div class="d-flex align-items-center">
                                                <div class="flex-grow-1">
                                                    <span class="badge badge-soft-primary">Layout</span>
                                                    <span class="badge badge-soft-primary">Admin</span>
                                                    <span class="badge badge-soft-primary">Dashboard</span>
                                                </div>
                                                <div class="flex-shrink-0">
                                                    <div class="avatar-group">
                                                        <a href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Michael">
                                                            <img src="assets/images/users/avatar-7.jpg" alt="" class="rounded-circle avatar-xxs"/>
                                                        </a>
                                                        <a href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Alexis">
                                                            <img src="assets/images/users/avatar-6.jpg" alt="" class="rounded-circle avatar-xxs"/>
                                                        </a>
                                                        <a href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Anna">
                                                            <img src="assets/images/users/avatar-1.jpg" alt="" class="rounded-circle avatar-xxs"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-footer border-top-dashed">
                                            <div class="d-flex">
                                                <div class="flex-grow-1">
                                                    <span class="text-muted"><i class="ri-time-line align-bottom"></i> 07 Jan, 2022</span>
                                                </div>
                                                <div class="flex-shrink-0">
                                                    <ul class="link-inline mb-0">
                                                        <li class="list-inline-item">
                                                            <a href="javascript:void(0)" class="text-muted"><i class="ri-eye-line align-bottom"></i> 14</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="javascript:void(0)" class="text-muted"><i class="ri-question-answer-line align-bottom"></i> 32</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="javascript:void(0)" class="text-muted"><i class="ri-attachment-2 align-bottom"></i> 05</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="my-3">
                                <button class="btn btn-soft-info w-100" data-bs-toggle="modal" data-bs-target="#creatertaskModal">Add More</button>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade" tabindex="-1" aria-labelledby="addmemberModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content border-0">
                                <div class="modal-header p-3 bg-soft-warning">
                                    <h5 class="modal-title" id="addmemberModalLabel">Add Member</h5>
                                    <button type="button" class="btn-close" id="btn-close-member" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div class="row g-3">
                                            <div class="col-lg-12">
                                                <label for="submissionidInput" class="form-label">Submission ID</label>
                                                <input type="number" class="form-control" id="submissionidInput" placeholder="Submission ID"/>
                                            </div>
                                            <div class="col-lg-12">
                                                <label for="profileimgInput" class="form-label">Profile Images</label>
                                                <input class="form-control" type="file" id="profileimgInput"/>
                                            </div>
                                            <div class="col-lg-6">
                                                <label for="firstnameInput" class="form-label">First Name</label>
                                                <input type="text" class="form-control" id="firstnameInput" placeholder="Enter firstname"/>
                                            </div>
                                            <div class="col-lg-6">
                                                <label for="lastnameInput" class="form-label">Last Name</label>
                                                <input type="text" class="form-control" id="lastnameInput" placeholder="Enter lastname"/>
                                            </div>
                                            <div class="col-lg-12">
                                                <label for="designationInput" class="form-label">Designation</label>
                                                <input type="text" class="form-control" id="designationInput" placeholder="Designation"/>
                                            </div>
                                            <div class="col-lg-12">
                                                <label for="titleInput" class="form-label">Title</label>
                                                <input type="text" class="form-control" id="titleInput" placeholder="Title"/>
                                            </div>
                                            <div class="col-lg-6">
                                                <label for="numberInput" class="form-label">Phone Number</label>
                                                <input type="text" class="form-control" id="numberInput" placeholder="Phone number"/>
                                            </div>
                                            <div class="col-lg-6">
                                                <label for="joiningdateInput" class="form-label">Joining Date</label>
                                                <input type="text" class="form-control" id="joiningdateInput" data-provider="flatpickr" placeholder="Select date"/>
                                            </div>
                                            <div class="col-lg-12">
                                                <label for="emailInput" class="form-label">Email ID</label>
                                                <input type="email" class="form-control" id="emailInput" placeholder="Email"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-light" data-bs-dismiss="modal"><i class="ri-close-line align-bottom me-1"></i> Close</button>
                                    <button type="button" class="btn btn-success" id="addMember">Add Member</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default index