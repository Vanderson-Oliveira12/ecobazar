import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {


  items = [
    {
      title: "Home",
      isDropdown: false,
      isOver: false,
      path: "",
    },
    {
      title: "Shop",
      isDropdown: true,
      isOver: false,
      path: "",
      options: [
        {
          title: "Lorem ITEM",
          path: ""
        },
        {
          title: "Lorem ITEM",
          path: ""
        },
        {
          title: "Lorem ITEM",
          path: ""
        },
        {
          title: "Lorem ITEM",
          path: ""
        }
      ]
    },
    {
      title: "Pages",
      isDropdown: true,
      isOver: false,
      path: "",
      options: [
        {
          title: "Lorem",
          path: ""
        },
        {
          title: "Lorem",
          path: ""
        },
        {
          title: "Lorem",
          path: ""
        },
        {
          title: "Lorem",
          path: ""
        }
      ]
    },
    {
      title: "Blog",
      isDropdown: true,
      isOver: false,
      path: "",
      options: [
        {
          title: "Lorem",
          path: ""
        },
        {
          title: "Lorem",
          path: ""
        },
        {
          title: "Lorem",
          path: ""
        },
        {
          title: "Lorem",
          path: ""
        }
      ]
    },
    {
      title: "About Us",
      isDropdown: false,
      isOver: false,
      path: "",
    },
    {
      title: "Contact Us",
      isDropdown: false,
      isOver: false,
      path: "",
    }
  ]


  handleOverMenuItem(item: any) {
    if(item.isDropdown) {
      item.isOver = true;
    }
  }

  handleOutMenuItem(item: any) {
    if(item.isDropdown) {
      item.isOver = false;
    }
  }
}
