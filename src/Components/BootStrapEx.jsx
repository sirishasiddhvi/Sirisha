import r from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import whiteflower from "./image1.jpeg"

export const BootStrapEx=()=>{
    return(
        <div class="container-sm container-md  container-lg  bg-secondary text-white-50 ">
            <div class="row" >
                <div class="col-lg-2 col-md-3 col-sm-6">
                    <div class="column">
                    <div >
                            <img src={whiteflower} class="rounded img-fluid" alt="flower" />
                        </div><div >
                            <img src={whiteflower} class="rounded-circle img-fluid" alt="flower" />
                        </div><div >
                            <img src={whiteflower} class="img-fluid" alt="flower" />
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-6">
                    <div class="container mt-3  ">
                   <table class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Siri</th>
                            <th>30</th>
                        </tr>
                        <tr>
                            <th>Hiri</th>
                            <th>40</th>
                        </tr>
                        <tr>
                            <th>Giri</th>
                            <th>20</th>
                        </tr>
                    </tbody>
                   </table></div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-6">
                    <div class="column">
                    <button type="button" class="btn btn-success m-1">button</button>
                        <button type="button" class="btn btn-outline-danger m-1"><span class="spinner-grow spinner-grow-sm"></span>button</button>
                    <div class="progress m-1">
                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-color-warning" style={{width:"40%"}}> </div>
                </div>
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href='#'>1</a></li>
                    <li class="page-item"><a class="page-link" href='#'>2</a></li>
                    <li class="page-item"><a class="page-link" href='#'>3</a></li>
                    <li class="page-item"><a class="page-link" href='#'>next</a></li>
                </ul>
                <ul class="breadcrumb">
                    <li class="breadcrumb-item"><a  href='#'>1</a></li>
                    <li class="breadcrumb-item"><a  href='#'>2</a></li>
                    <li class="breadcrumb-item"><a  href='#'>3</a></li>
                    <li class="breadcrumb-item active"><a  href='#'>next</a></li>
                </ul>
                <div class="dropdown">
                    <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown">dropdown </button>
                <ul class="dropdown-menu">
                    <li ><a class="dropdown-item" href='#'>1</a></li>
                    <li ><a class="dropdown-item" href='#'>2</a></li>
                    <li ><a class="dropdown-item" href='#'>3</a></li>
                    </ul>  
                </div>
                <button class="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#demo">collapse</button>
                <div id="demo" class="collapse">Hello Sirisha</div>
                
                </div></div>
                <div class="col-lg-2 col-md-3 col-sm-6 text-bg-dark ">
                    <div class="card " style={{width:"90%"}}>
                        <img src={whiteflower} class="card-img-top"alt="flower"/>
                    <div class="card-body">
     <h1 class="card-title">tgbh</h1>
     <p class="card-text">wertyu</p>
                        <a href="#" class="btn btn-primary">See Profile</a>
                    </div>
                    </div></div>
                <div class="col-lg-3 col-md-3 col-sm-6">hello</div>
            </div>
        </div>
    )
}