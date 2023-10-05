import React, { useEffect, useState } from "react";
import { Form,FloatingLabel } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Col, FormGroup, Input, Label, Row, Button } from "reactstrap";
import BreadCrumb from "../../../components/breadcrumb";
import universiteService from "../../../services/universiteService";
import villeService from "../../../services/villeService";
// import { errorNotif, successNotif } from "../../../components/notification";

const index = () => {
    const [universite, setUniversite] = useState([]);
    const [users, setUsers] = useState([]);
    const [villes, setVilles] = useState([]);
    const [isloading, setIsLoading] = useState(true);
    const {idUniversite} = useParams();
    let navigate = useNavigate();
    const [formInput, setFormInput] = useState([
        {
            id: "",
            nom: "",
            telephone: "",
            email: "",
            adresse: "",
            abreviation: "",
            date_creation: "",
            logo: "",
            logo_cover: "",
            petit_description: "",
            ville_id: "",
            president_nom: "",
            president_prenom: "",
        },
    ]);

    const getVilles = () => {
        villeService.getVilles()
        .then((response) => {
            setVilles(response.data.villes)
        })
    }

    console.log("idUniversite->", idUniversite);

    const handSubmit = (e) => {
        console.log("form->", formInput);
        e.preventDefault();
        universiteService.postUniversite(formInput)
        .then((response) => {
            console.log("response->", response);
            // successNotif('Success', response.message)
            navigate("/admin/université/accueil");
            setUniversite(response.data.universites);

        },
        error => {
            // const resMessage = ApiRoute?.handlerError(error);
            // errorNotif('Leger souci', resMessage)
        }
        )
    }

    useEffect(() => {
        getVilles();
    }, [])


    return (
        <>
            <BreadCrumb title="Edition des informations" backTitle="Liste des universités" link="/admin/université/accueil" />

            <Form
                id="createproduct-form"
                // autocomplete="off"
                className="needs-validation"
                noValidate
                onSubmit={handSubmit}
            >
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="tab-content">
                                    <div
                                        className="tab-pane active"
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
                                                    onChange={(e) => setFormInput({ ...formInput, nom: e.target.value })}
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
                                                    onChange={(e) => setFormInput({ ...formInput, abreviation: e.target.value })}
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
                                                    onChange={(e) => setFormInput({ ...formInput, telephone: e.target.value })}
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
                                                    onChange={(e) => setFormInput({ ...formInput, email: e.target.value })}
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
                                                    onChange={(e) => setFormInput({ ...formInput, logo: e.target.value })}
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
                                                    onChange={(e) => setFormInput({ ...formInput, logo_cover: e.target.value })}
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
                                                    onChange={(e) => setFormInput({ ...formInput, adresse: e.target.value })}
                                                    name="adresse"
                                                    placeholder="Adresse de l'université"
                                                />
                                                </div>
                                            </Col>
                                            <Col lg={12}>
                                                <div className="mb-3">
                                                <Form.Label htmlFor="manufacturer-name-input">Petite description</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="manufacturer-name-input"
                                                    onChange={(e) => setFormInput({ ...formInput, petit_description: e.target.value })}
                                                    name="petit_description"
                                                    placeholder="Veuillez saisir un petit text descriptif de l'université"
                                                />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title mb-0">Le president actuel de l'université</h5>
                            </div>
                            <div className="card-body">
                                <div className="tab-content">
                                    <div
                                        className="tab-pane active"
                                        id="addproduct-general-info"
                                        role="tabpanel"
                                    >
                                        <Row>
                                            <Form.Select aria-label="Default select example"
                                                    onChange={(e) => setFormInput({ ...formInput, ville_id: e.target.value })}
                                                >
                                                    <option value="villes">selectionnez un president</option>
                                                    { villes.map((data) => (
                                                        <option key={data.id} value={data?.id}>{data?.nom}</option>
                                                    ))}
                                            </Form.Select>
                                        </Row>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="text-end mb-3">
                            <button type="submit" className="btn btn-success w-sm">
                            Modifier des informations
                            </button>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title mb-0">Où se trouve l'université</h5>
                            </div>
                            <div className="card-body">
                                <div className="mb-3">
                                        <Form.Select aria-label="Default select example"
                                                onChange={(e) => setFormInput({ ...formInput, ville_id: e.target.value })}
                                            >
                                                <option value="villes">selectionnez la ville</option>
                                                { villes.map((data) => (
                                                    <option key={data.id} value={data?.id}>{data?.nom}</option>
                                                ))}
                                        </Form.Select>
                                </div>

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title mb-0">
                                    Date de creation de l'université
                                </h5>
                            </div>
                            <div className="card-body">
                                <div>
                                    <Input
                                        type="date"
                                        className="form-control"
                                        onChange={(e) => setFormInput({ ...formInput, date_creation: e.target.value })}
                                        name="date_creation"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title mb-0">
                                    Information du DG
                                </h5>
                            </div>
                            <div className="card-body">
                                <div className="mb-3">
                                        <Form.Select aria-label="Default select example"
                                                onChange={(e) => setFormInput({ ...formInput, ville_id: e.target.value })}
                                            >
                                                <option value="villes">selectionnez un etudiant</option>
                                                { villes.map((data) => (
                                                    <option key={data.id} value={data?.id}>{data?.nom}</option>
                                                ))}
                                        </Form.Select>
                                </div>

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title mb-0">
                                    Information du DG Adjoint
                                </h5>
                            </div>
                            <div className="card-body">
                                <div className="mb-3">
                                        <Form.Select aria-label="Default select example"
                                                onChange={(e) => setFormInput({ ...formInput, ville_id: e.target.value })}
                                            >
                                                <option value="villes">selectionnez un etudiant</option>
                                                { villes.map((data) => (
                                                    <option key={data.id} value={data?.id}>{data?.nom}</option>
                                                ))}
                                        </Form.Select>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </Form>
        </>
    );
};

export default index;
