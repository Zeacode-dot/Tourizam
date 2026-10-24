"use client";

import React, { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock, User, ArrowLeft, Tag, Share2, MessageSquare, Send } from "lucide-react";
import { BLOGS } from "@/data/blogs";
import { TOURS } from "@/data/tours";
import TourCard from "@/components/TourCard";

export default function SingleBlogPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = BLOGS.find((b) => b.slug === slug);

  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState<Array<{ name: string; text: string; date: string }>>([
    {
      name: "Sophia Martinez",
      text: "This brings back so many memories of navigating the Austrian Alps with an old folding map! GPS just loses that romance.",
      date: "August 12, 2025",
    },
  ]);

  if (!post) {
    return notFound();
  }

  const relatedTours = TOURS.slice(0, 2);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentName && commentText) {
      setComments([
        ...comments,
        {
          name: commentName,
          text: commentText,
          date: "Just now",
        },
      ]);
      setCommentName("");
      setCommentText("");
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#f97150] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all articles</span>
        </Link>

        {/* Article Header */}
        <div className="space-y-4">
          <span className="bg-[#f97150] text-white text-[11px] font-bold px-3 py-1 rounded-md uppercase tracking-wider">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-xs text-slate-500 pt-2 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2 font-semibold text-slate-700">
              <User className="w-4 h-4 text-[#f97150]" />
              <span>{post.author}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#f97150]" />
              <span>{post.date}</span>
            </div>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg bg-slate-200">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200/80 shadow-sm space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
          <p className="text-lg font-medium text-slate-900 italic border-l-4 border-[#f97150] pl-4">
            &ldquo;{post.excerpt}&rdquo;
          </p>

          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}

          {/* Tags */}
          <div className="pt-6 border-t border-slate-100 flex items-center gap-2 flex-wrap text-xs">
            <Tag className="w-4 h-4 text-slate-400" />
            <span className="font-bold text-slate-600">Tags:</span>
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Tours Widget */}
        <div className="space-y-4 pt-6">
          <h3 className="text-xl font-black text-slate-900 tracking-tight">
            Recommended Trips For This Story
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm space-y-6">
          <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#f97150]" />
            <span>Discussion ({comments.length})</span>
          </h3>

          <div className="space-y-4">
            {comments.map((c, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-xl space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900">{c.name}</span>
                  <span className="text-slate-400">{c.date}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {c.text}
                </p>
              </div>
            ))}
          </div>

          {/* Add Comment Form */}
          <form onSubmit={handleAddComment} className="pt-4 border-t border-slate-100 space-y-3">
            <h4 className="font-bold text-sm text-slate-800">Leave a Comment</h4>
            <input
              type="text"
              required
              value={commentName}
              onChange={(e) => setCommentName(e.target.value)}
              placeholder="Your Name"
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
            />
            <textarea
              required
              rows={3}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Share your thoughts..."
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
            ></textarea>
            <button
              type="submit"
              className="bg-[#f97150] hover:bg-[#e85e34] text-white px-5 py-2 rounded-lg text-xs font-bold uppercase cursor-pointer"
            >
              Post Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
