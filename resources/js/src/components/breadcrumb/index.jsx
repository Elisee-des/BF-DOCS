import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

const BreadCrumb = ({ title,secondTitle, backTitle, link}) => {
    return (
        <>
        <React.Fragment>
            <Row>
                <Col xs={12}>
                    <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 className="mb-sm-0">{title}</h4>

                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                {backTitle ? (<><li className="breadcrumb-item active"><Link to={link}>{backTitle}</Link></li></>) : ""}
                                {secondTitle ?(
                                    <li className="breadcrumb-item"><Link to={link}>{secondTitle}</Link></li>

                                ):""}
                                {/* <li className="breadcrumb-item active">{title}</li> */}
                            </ol>
                        </div>

                    </div>
                </Col>
            </Row>
        </React.Fragment>
        </>
    );
};

export default BreadCrumb;