import React, { useEffect, useState } from "react";
import { Form,FloatingLabel } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Col, FormGroup, Input, Label, Row, Button } from "reactstrap";
import BreadCrumb from "../../../components/breadcrumb";
import universiteService from "../../../services/universiteService";

const AjoutUniverisite = () => {
    const [universite, setUniversite] = useState([]);
    const [users, setUsers] = useState([]);
    const [villes, setVilles] = useState([]);
    const [isloading, setIsLoading] = useState(true);
    let navigate = useNavigate();
    const [formInput, setFormInput] = useState([
        {
            id: "",
            nom: "",
            telephone: "",
            email: "",
            adresse: "",
            description: "",
            localisation: "",
            abreviation: "",
            date_creation: "",
            logo: "",
            logo_cover: "",
            ville_id: "",
            president_nom: "",
            president_prenom: "",
        },
    ]);
    const {idUniversite} = useParams();

    const getUniversite = () => {
        universiteService.getUniversite(idUniversite)
        .then((response) => {
            console.log("responseUniversite->", response);
        })
    }

    const getUsers = () => {
        universiteService.getUsersUniversite(idUniversite)
        .then((response) => {
            console.log("response->", response);
        })
    }

    useEffect(() => {
        getUniversite(idUniversite)
        getUsers(idUniversite)
    }, [])


    // const OnChangePays = (e) => {
    //     setFormInput({ ...formInput, pays_id: e.target.value })
    //     dataService.getRegion(e.target.value).then(
    //         (resData) => {
    //             setVille(resData)
    //             setIsLoading(false)
    //         }
    //     );

    // }
    // const onChangeRegion = (e) => {
    //     setFormInput({ ...formInput, region_id: e.target.value })
    //     dataService.getProvince(e.target.value).then(
    //         (resData) => {
    //             console.log(resData);
    //             setProvince(resData)
    //             setIsLoading(false)
    //         }
    //     );
    // }
    return (
        <>
            <BreadCrumb title="Création d'une nouvelle universsité" backTitle="Liste des universités" link="/admin/université/accueil" />

            <Form
                id="createproduct-form"
                autocomplete="off"
                class="needs-validation"
                novalidate
            >
                <div class="row">
                    <div class="col-lg-8">
                        <div class="card">
                            <div class="card-body">
                                <div class="tab-content">
                                    <div
                                        class="tab-pane active"
                                        id="addproduct-general-info"
                                        role="tabpanel"
                                    >
                                        <Row>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                <Form.Label htmlFor="manufacturer-name-input">Nom</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="manufacturer-name-input"
                                                    placeholder="Entrez le nom"
                                                    name="nom"
                                                />
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                <Form.Label htmlFor="manufacturer-brand-input">Sigle</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="manufacturer-brand-input"
                                                    placeholder="Entrez le sigle, une abréviation"
                                                    name="abreviation"
                                                />
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                <Form.Label htmlFor="manufacturer-name-input">Numéro</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="manufacturer-name-input"
                                                    placeholder="Entrez un numero de telephone"
                                                    name="telephone"
                                                />
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                <Form.Label htmlFor="manufacturer-brand-input">Email</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="manufacturer-brand-input"
                                                    name="email"
                                                    placeholder="Entrez un email"
                                                />
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                <Form.Label htmlFor="manufacturer-name-input">Logo</Form.Label>
                                                <Form.Control
                                                    type="file"
                                                    name="logo"
                                                    id="manufacturer-name-input"
                                                />
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                <Form.Label htmlFor="manufacturer-brand-input">Logo de couverture</Form.Label>
                                                <Form.Control
                                                    type="file"
                                                    name="logo_cover"
                                                    id="manufacturer-name-input"
                                                />
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            
                                            <Col lg={12}>
                                                <div className="mb-3">
                                                <Form.Label htmlFor="manufacturer-name-input">Adresse</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="manufacturer-name-input"
                                                    name="adresse"
                                                    placeholder="Adresse de l'université"
                                                />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title mb-0">Le president actuel de l'université</h5>
                            </div>
                            <div class="card-body">
                                <div class="tab-content">
                                    <div
                                        class="tab-pane active"
                                        id="addproduct-general-info"
                                        role="tabpanel"
                                    >
                                        <Row>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                <Form.Label htmlFor="manufacturer-name-input">Nom</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="manufacturer-name-input"
                                                    name="president_nom"
                                                    placeholder="Entrez le nom du responsable"
                                                />
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                <Form.Label htmlFor="manufacturer-brand-input">Prénom</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="manufacturer-brand-input"
                                                    name="president_prenom"
                                                    placeholder="Entrez le prenom du reponsable"
                                                />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>
                            </div>
                        </div>

                            <div class="card">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Les délegués générals actuel de l'université</h5>
                                </div>
                                <div class="card-body">
                                    <div class="tab-content">
                                        <div
                                            class="tab-pane active"
                                            id="addproduct-general-info"
                                            role="tabpanel"
                                        >
                                           <Row>
                                                <Col lg={6}>
                                                    <Form.Select aria-label="Default select example"
                                                    onChange={(e) => setFormInput({ ...formInput, faitiere_id: e.target.value })}
                                                        >
                                                            <option value="Published">selectionnez le DG</option>
                                                        
                                                            {/* <option value={faitiere?.id}>{faitiere?.nom} </option> */}
                                                    </Form.Select>
                                                </Col>
                                                <Col lg={6}>
                                                    <Form.Select aria-label="Default select example"
                                                    onChange={(e) => setFormInput({ ...formInput, user_id: e.target.value })}
                                                        >
                                                            <option value="">selectionnez le DG adjoint</option>
                                                            { (users || []).map((user) => (
                                                                <option key={user?.id} value={user?.id}>{user?.nom} {user?.prenom}</option>
                                                            ))}
                                                    </Form.Select>
                                                </Col>
                                           </Row>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        <div class="text-end mb-3">
                            <button type="submit" class="btn btn-success w-sm">
                            Créer l'université
                            </button>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title mb-0">Où se trouve l'université</h5>
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                        <Form.Select aria-label="Default select example"
                                                onChange={(e) => setFormInput({ ...formInput, faitiere_id: e.target.value })}
                                            >
                                                <option value="Published">selectionnez la ville</option>
                                              
                                                {/* <option value={faitiere?.id}>{faitiere?.nom} </option> */}
                                                     

                                        </Form.Select>
                                </div>

                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title mb-0">
                                    Date de creation de l'université
                                </h5>
                            </div>
                            <div class="card-body">
                                <div>
                                    <Input
                                        type="date"
                                        class="form-control"
                                        name="date_creation"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Form>
        </>
    );
};

export default AjoutUniverisite;
