import React from 'react';

export default function Navbar() {
  return (
    <>
       <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

<a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.php">
  
  <div class="sidebar-brand-text mx-3">Railways </div>
</a>


<hr class="sidebar-divider my-0" />


<li class="nav-item active">
  <a class="nav-link" href={'/manage-companies'}>
    <i class="fas fa-fw fa-tachometer-alt"></i>
    <span>Dashboard</span></a>
</li>


<hr class="sidebar-divider" />

<div class="sidebar-heading">
  Interface
</div>

<li class="nav-item">
  <a class="nav-link" href={'/manage-documents'}>
    <i class="fas fa-fw fa-cog"></i>
    <span>Manage Documents</span>
  </a>
</li>
<li class="nav-item">
  <a class="nav-link" href={'/admin-profile'}>
    <i class="fas fa-fw fa-chart-area"></i>
    <span>Admin Profile</span></a>
</li>

<li class="nav-item">
  <a class="nav-link" href={'/manage-companies'}>
    <i class="fas fa-fw fa-cog"></i>
    <span>Manage Companies</span></a>
</li>


<hr class="sidebar-divider d-none d-md-block"/>
<div class="text-center d-none d-md-inline">
  <button class="rounded-circle border-0" id="sidebarToggle"></button>
</div>

</ul>

 
    </>
  );
}
