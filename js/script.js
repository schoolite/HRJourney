const staffToggle = document.querySelectorAll('.staffs-toggle i');
  const staffData = document.querySelectorAll('.staffs-grid, .staffs-table');

  for(let i = 0; i < staffToggle.length; i++){
    staffToggle[i].addEventListener('click', function(ele){
      if(!ele.target.classList.contains('staff-view')){
        
        staffToggle.forEach(staffT => staffT.classList.toggle('staff-view'));
        
        staffData.forEach(staffD => staffD.classList.toggle('d-none'));
        
      }
    })
}


