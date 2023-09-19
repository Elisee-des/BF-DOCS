import React from "react";
import logo1 from "../../../assets/images/ujkz.jpeg";
import logo2 from "../../../assets/images/unz1.jpeg";
import logo3 from "../../../assets/images/ujkz.jpeg";
import logo4 from "../../../assets/images/unz2.jpeg";
import logo5 from "../../../assets/images/ujkz.jpeg";
import imageUrl from  '../../../assets/images/ujkz.jpeg'; // Remplacez ceci par le chemin réel de votre image
import imageUrl1 from  '../../../assets/images/unz1.jpeg'; // Remplacez ceci par le chemin réel de votre image


function UniversitesPage() {
    return (
        <>
        <div class="page-content">
                     <div class="container-fluid">
     
     
                         <div class="card">
                             <div class="card-body">
                                 <div class="row g-2">
                                     <div class="col-lg-auto">
                                         {/* <div class="hstack gap-2">
                                             <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createboardModal"><i class="ri-add-line align-bottom me-1"></i> Create Board</button>
                                         </div> */}
                                     </div>
                                     <div class="col-lg-3 col-auto">
                                         <div class="search-box">
                                             <input type="text" class="form-control search" id="search-task-options" placeholder="Chercher une université"/>
                                             <i class="ri-search-line search-icon"></i>
                                         </div>
                                     </div>
                                     <div class="col-auto ms-sm-auto">
                                         <div class="avatar-group" id="newMembar">
                                             <a href="#" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Nancy">
                                                 <img src={logo1} alt="" class="rounded-circle avatar-xs"/>
                                             </a>
                                             <a href="#" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Frank">
                                                 <img src={logo2} alt="" class="rounded-circle avatar-xs"/>
                                             </a>
                                             <a href="#" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Tonya">
                                                 <img src={logo3} alt="" class="rounded-circle avatar-xs"/>
                                             </a>
                                             <a href="#" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Thomas">
                                                 <img src={logo4} alt="" class="rounded-circle avatar-xs"/>
                                             </a>
                                             <a href="#" class="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Herbert">
                                                 <img src={logo5} alt="" class="rounded-circle avatar-xs"/>
                                             </a>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
     
                         <div class="tasks-board mb-3" id="kanbanboard">
                             <div class="tasks-list">
                                 <div class="d-flex mb-3">
                                     <div class="flex-grow-1">
                                         <h6 class="fs-14 text-uppercase fw-semibold mb-0">UJKZ</h6>
                                     </div>
                                 </div>
                                 <div data-simplebar class="tasks-wrapper px-3 mx-n3">
                                     <div id="reviews-task" class="tasks">
                                         <div class="card tasks-box">
                                             <div class="card-body">
                                                 <h6 class="fs-15 text-truncate task-title"><a href="apps-tasks-details.html" class="d-block">Université Joseph Zi Zerbo</a></h6>
                                                 <div class="tasks-img rounded" style={{backgroundImage: `url(${imageUrl})`}}></div>
                                                 <div class="d-flex align-items-center">
                                                     <div class="flex-grow-1">
                                                         <span class="badge badge-soft-secondary">Ouagadougou</span>
                                                         <span class="badge badge-soft-primary">Université public</span>
                                                         <span class="badge badge-soft-info">Documentation(500)</span>
                                                         <span class="badge badge-soft-danger">images(30)</span>
                                                     </div>
                                                 </div>
                                             </div>
                                             <div class="card-footer border-top-dashed">
                                                 <div class="d-flex">
                                                     <div class="flex-grow-1">
                                                         <span class="text-muted"><i class="ri-time-line align-bottom"></i> Date de création: 16/03/2021</span>
                                                     </div>
                                                 </div>
                                             </div>
                                             <div class="progress progress-sm">
                                                 <div class="progress-bar bg-success" role="progressbar" style={{width: "100%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                             </div>
                                         </div>
                                         <div class="card tasks-box">
                                             <div class="card-body">
                                                 <h6 class="fs-15 text-truncate task-title"><a href="apps-tasks-details.html" class="d-block">Description</a></h6>
                                                 <p class="text-muted">L'université Joseph Ki Zerbo est une prestigeuse université. Cette université regorge de...</p>
                                             </div>
                                             
                                         </div>
                                     </div>
                                 </div>
                                 <div class="my-3">
                                     <button class="btn btn-soft-info w-100" data-bs-toggle="modal" data-bs-target="#creatertaskModal">Lire plus</button>
                                 </div>
                             </div>
                             <div class="tasks-list">
                                 <div class="d-flex mb-3">
                                     <div class="flex-grow-1">
                                         <h6 class="fs-14 text-uppercase fw-semibold mb-0">UNZ</h6>
                                     </div>
                                 </div>
                                 <div data-simplebar class="tasks-wrapper px-3 mx-n3">
                                     <div id="reviews-task" class="tasks">
                                         <div class="card tasks-box">
                                             <div class="card-body">
                                                 <h6 class="fs-15 text-truncate task-title"><a href="apps-tasks-details.html" class="d-block">Université Norbert Zongo</a></h6>
                                                 <div class="tasks-img rounded" style={{backgroundImage: `url(${imageUrl1})`}}></div>
                                                 <div class="d-flex align-items-center">
                                                     <div class="flex-grow-1">
                                                         <span class="badge badge-soft-secondary">Koudougou</span>
                                                         <span class="badge badge-soft-primary p-1">Université public</span> 
                                                         <span class="badge badge-soft-info">Documentations(200)</span>
                                                         <span class="badge badge-soft-danger">images(20)</span>
                                                     </div>
                                                 </div>
                                             </div>
                                             <div class="card-footer border-top-dashed">
                                                 <div class="d-flex">
                                                     <div class="flex-grow-1">
                                                         <span class="text-muted"><i class="ri-time-line align-bottom"></i> Date de création: 16/02/2015</span>
                                                     </div>
                                                 </div>
                                             </div>
                                             <div class="progress progress-sm">
                                                 <div class="progress-bar bg-success" role="progressbar" style={{width: "100%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                             </div>
                                         </div>
                                         <div class="card tasks-box">
                                             <div class="card-body">
                                                 <h6 class="fs-15 text-truncate task-title"><a href="apps-tasks-details.html" class="d-block">Description</a></h6>
                                                 <p class="text-muted">L'université Norbert Zongo est une prestigeuse université. Cette université regorge de...</p>
                                             </div>
                                             
                                         </div>
                                     </div>
                                 </div>
                                 <div class="my-3">
                                     <button class="btn btn-soft-info w-100" data-bs-toggle="modal" data-bs-target="#creatertaskModal">Lire plus</button>
                                 </div>
                             </div>
                         </div>
     
                     </div>
                 </div>
         </>
    );
}

export default UniversitesPage;
