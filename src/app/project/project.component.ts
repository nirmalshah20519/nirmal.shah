import { Component } from '@angular/core';
interface Slide {
  image: string;
  title: string;
  description: string;
  gitLink:string;
  liveLink:string;
}
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  slides2: string[] = [
    '',
    '',
    '',
  ];
  slides: Slide[] = [
    {
      image: 'https://res.cloudinary.com/movie-booking-site/image/upload/v1692184134/Portfolio/exam-app_rypwst.jpg',
      title: 'Exam App',
      description: 'Exam App is a sleek Angular-powered platform for MCQ-based exams. With a built-in countdown timer, users experience time-bound challenges. Features include randomized questions, instant feedback, and result analysis. Perfect for educational and assessment needs.',
      gitLink:"https://github.com/nirmalshah20519/RepoDuplicate/tree/main/Angular/Day11/Assignments/Assignment1/Source",
      liveLink:"https://the-exam-app.netlify.app/"

    },
    {
      image: 'https://res.cloudinary.com/movie-booking-site/image/upload/v1692185341/Portfolio/cms_jhx0z5.jpg',
      title: 'College Management System',
      description: 'Developed a comprehensive college management system website using Angular, featuring a robust multi-user login system. This platform streamlines administrative tasks, student interactions, and faculty management, enhancing efficiency and communication within the institution.',
      gitLink:"https://github.com/nirmalshah20519/RepoDuplicate/tree/main/Angular/Day14/Assignments/Assignment1/Source",
      liveLink:"https://cms-001.netlify.app/"
    },
    {
      image: 'https://res.cloudinary.com/movie-booking-site/image/upload/v1692185530/Portfolio/typoTestor_ksagxa.jpg',
      title: 'Typo Testor',
      description: 'Introducing a Typo Testor built with React, designed to evaluate your typing speed. Measure your typing speed in words per minute (WPM) and accuracy, as the site presents engaging typing challenges. Sharpen your keyboard skills while tracking your progress over time, all within a sleek and user-friendly interface',
      gitLink:"https://github.com/nirmalshah20519/typotestor",
      liveLink:"https://typo-testor.netlify.app/"
    },
  ];

  ngOnInit(): void {}
  currentIndex = 0;
  prevSlide(): void {
    this.currentIndex = Math.max(this.currentIndex - 1, 0);
  }

  nextSlide(): void {
    this.currentIndex = Math.min(this.currentIndex + 1, this.slides.length - 1);
  }
}
