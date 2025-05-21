'use client';
import Link from 'next/link';

const Menubar = () => {
  return (
    <nav className="bg-black text-white p-6">
      <ul className="space-y-2">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/midterm-part1">Midterm Part I - Expense</Link></li>
        <li><Link href="/midterm-part2">Midterm Part II Site</Link></li>
        <li><Link href="/faq">FAQ</Link></li>
        <li className="text-4xl font-extrabold text-indigo-400 mt-6">Final Exam 343</li>
        <li className="text-2xl text-gray-300">Genghui, Lin</li>
        <li className="text-lg text-gray-400">Spring 2025</li>
      </ul>
    </nav>
  );
};

export default Menubar;
