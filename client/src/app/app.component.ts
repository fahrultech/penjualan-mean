import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit(): void {

    $(document).ready(function () {
      document.querySelectorAll('#sidebar-menu a').forEach((item, index) => {
        item.addEventListener('click', function () {

          $("a", $(this).parents("ul:first")).removeClass("active");
          $(this).addClass('active');
          if ($(this).parent().hasClass("has_sub")) {
            if (!$(this).hasClass("subdrop")) {
              
              // hide any open menus and remove all other classes
              console.log($(this))
              $("ul", $(this).parents("ul:first")).slideUp(350);
              $("a", $(this).parents("ul:first")).removeClass("subdrop");
              $("#sidebar-menu .pull-right i").removeClass("mdi-minus").addClass("mdi-plus");

              // open our new menu and add the open class
              $(this).next("ul").slideDown(350);
              $(this).addClass("subdrop");
              $(".pull-right i", $(this).parents(".has_sub:last")).removeClass("mdi-plus").addClass("mdi-minus");
              $(".pull-right i", $(this).siblings("ul")).removeClass("mdi-minus").addClass("mdi-plus");
            } else if ($(this).hasClass("subdrop")) {
              $(this).removeClass("subdrop");
              $(this).next("ul").slideUp(350);
              $(".pull-right i", $(this).parent()).removeClass("mdi-minus").addClass("mdi-plus");
            }
          }
        })
      })

      document.querySelector('.open-left').addEventListener('click', function () {
        $("#wrapper").toggleClass("enlarged");
        $("#wrapper").addClass("forced");

        if ($("#wrapper").hasClass("enlarged") && $("body").hasClass("fixed-left")) {
          $("body").removeClass("fixed-left").addClass("fixed-left-void");
        } else if (!$("#wrapper").hasClass("enlarged") && $("body").hasClass("fixed-left-void")) {
          $("body").removeClass("fixed-left-void").addClass("fixed-left");
        }

        if ($("#wrapper").hasClass("enlarged")) {
          $(".left ul").removeAttr("style");
        } else {
          $(".subdrop").siblings("ul:first").show();
        }
      })
      $("#sidebar-menu ul li.has_sub a.active").parents("li:last").children("a:first").addClass("active").trigger("click");
      
    });
  }
}
