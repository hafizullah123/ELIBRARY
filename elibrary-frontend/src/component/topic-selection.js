import React, { useState } from "react";

// More sample topics with type field
const allTopics = [
  {
    id: "101",
    titlePashto: "د کمپیوټر ساینس څیړنه",
    titleDari: "تحقیق کمپیوتر ساینس",
    titleEnglish: "Computer Science Research",
    author: "Ahmad Zahir",
    university: "Kabul University",
    department: "Computer Science",
    abstract: "A deep study into algorithms and systems.",
    type: "Research",
    publicationDate: "2024-03-15",
  },
  {
    id: "102",
    titlePashto: "د چاپېریال ساتنې پروپوزل",
    titleDari: "پیشنهاد محیط زیست",
    titleEnglish: "Environmental Protection Proposal",
    author: "Fatima Niazi",
    university: "Herat University",
    department: "Environmental Science",
    abstract: "Proposal on preserving biodiversity.",
    type: "Proposal",
    publicationDate: "2023-09-20",
  },
  {
    id: "103",
    titlePashto: "د ریاضي تیوري",
    titleDari: "نظریه ریاضی",
    titleEnglish: "Mathematics Theory",
    author: "Hassan Kakar",
    university: "Balkh University",
    department: "Mathematics",
    abstract: "Exploring number theory and algebraic structures.",
    type: "Thesis",
    publicationDate: "2022-12-05",
  },
  {
    id: "104",
    titlePashto: "د ټکنالوژۍ پرمختګ",
    titleDari: "پیشرفت تکنولوژی",
    titleEnglish: "Technology Advancement",
    author: "Saira Mohammadi",
    university: "Nangarhar University",
    department: "Engineering",
    abstract: "Innovations in modern technology and applications.",
    type: "Research",
    publicationDate: "2023-06-10",
  },
  {
    id: "105",
    titlePashto: "د تاریخ مهم پیښې",
    titleDari: "رویدادهای مهم تاریخ",
    titleEnglish: "Important Historical Events",
    author: "Javed Habibi",
    university: "Kabul University",
    department: "History",
    abstract: "Reviewing key historical moments.",
    type: "Presentation",
    publicationDate: "2024-01-22",
  },
  {
    id: "106",
    titlePashto: "ادبي ژبه او سبک",
    titleDari: "زبان و سبک ادبی",
    titleEnglish: "Literary Language and Style",
    author: "Zahra Hashemi",
    university: "Herat University",
    department: "Literature",
    abstract: "Analysis of poetic styles in Persian literature.",
    type: "Thesis",
    publicationDate: "2023-03-18",
  },
  // Add more if needed
];

const ITEMS_PER_PAGE = 3;

export default function TopicSelection() {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTopic, setSelectedTopic] = useState(null);

  // Filter topics by search and type
  const filteredTopics = allTopics.filter((topic) => {
    const searchLower = search.toLowerCase();
    const matchesSearch =
      topic.titleEnglish.toLowerCase().includes(searchLower) ||
      topic.author.toLowerCase().includes(searchLower) ||
      topic.university.toLowerCase().includes(searchLower) ||
      topic.department.toLowerCase().includes(searchLower);

    const matchesType = filterType === "" || topic.type === filterType;

    return matchesSearch && matchesType;
  });

  const totalPages = Math.ceil(filteredTopics.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentTopics = filteredTopics.slice(
    startIdx,
    startIdx + ITEMS_PER_PAGE
  );

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    setSelectedTopic(null); // reset detailed view on page change
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Topic Selection with Filters & Pagination
        </h1>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between max-w-3xl mx-auto mb-6 gap-4">
          <input
            type="text"
            placeholder="Search by title, author, university or department"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
              setSelectedTopic(null);
            }}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={filterType}
            onChange={(e) => {
              setFilterType(e.target.value);
              setCurrentPage(1);
              setSelectedTopic(null);
            }}
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Types</option>
            <option value="Thesis">Thesis</option>
            <option value="Research">Research</option>
            <option value="Proposal">Proposal</option>
            <option value="Presentation">Presentation</option>
          </select>
        </div>

        {/* Topics List */}
        <div className="grid gap-6 md:grid-cols-2">
          {currentTopics.length === 0 && (
            <p className="text-center text-gray-500 col-span-2">
              No topics found matching your criteria.
            </p>
          )}
          {currentTopics.map((topic) => (
            <div
              key={topic.id}
              className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition"
              onClick={() => setSelectedTopic(topic)}
            >
              <h2 className="text-xl font-semibold text-blue-600 mb-1 truncate">
                {topic.titleEnglish}
              </h2>
              <p className="text-gray-700 mb-2 line-clamp-3">
                {topic.abstract}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Author:</strong> {topic.author} |{" "}
                <strong>University:</strong> {topic.university}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                <strong>Type:</strong> {topic.type}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(totalPages)].map((_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`px-4 py-2 rounded ${
                    pageNum === currentPage
                      ? "bg-blue-600 text-white"
                      : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>
        )}

        {/* Selected Topic Details */}
        {selectedTopic && (
          <div className="mt-10 bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              Detailed Topic Information
            </h3>
            <ul className="space-y-3 text-gray-800">
              <li>
                <strong>ID:</strong> {selectedTopic.id}
              </li>
              <li>
                <strong>Title (Pashto):</strong> {selectedTopic.titlePashto}
              </li>
              <li>
                <strong>Title (Dari):</strong> {selectedTopic.titleDari}
              </li>
              <li>
                <strong>Title (English):</strong> {selectedTopic.titleEnglish}
              </li>
              <li>
                <strong>Author:</strong> {selectedTopic.author}
              </li>
              <li>
                <strong>University:</strong> {selectedTopic.university}
              </li>
              <li>
                <strong>Department:</strong> {selectedTopic.department}
              </li>
              <li>
                <strong>Type:</strong> {selectedTopic.type}
              </li>
              <li>
                <strong>Publication Date:</strong>{" "}
                {selectedTopic.publicationDate}
              </li>
              <li>
                <strong>Abstract:</strong> {selectedTopic.abstract}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
