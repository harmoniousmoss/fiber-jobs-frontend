import { useState, useEffect } from "react";
import { Trash2, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Job {
  id: number;
  date: string;
  title: string;
  link: string;
}

interface MainContentProps {
  initialJobs?: Job[];
}

export function MainContent({ initialJobs = [] }: MainContentProps) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [jobToDelete, setJobToDelete] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 5;

  useEffect(() => {
    if (initialJobs.length > 0) {
      setJobs(initialJobs);
    }
    setIsLoading(false);
  }, [initialJobs]);

  const deleteJob = (id: number) => {
    setJobs(jobs.filter((job) => job.id !== id));
    setJobToDelete(null);
  };

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredJobs.length / itemsPerPage);
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const exportToExcel = () => {
    console.log("Exporting to Excel...");
  };

  if (isLoading) {
    return <div className="flex-1 p-4">Loading...</div>;
  }

  return (
    <main className="flex-1 p-4">
      <h2 className="text-2xl font-bold mb-4">UN Job Remote</h2>

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64"
          />
          <Button variant="outline" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="outline" onClick={exportToExcel}>
          Export to Excel
        </Button>
      </div>

      {jobs.length === 0 ? (
        <p>No jobs available.</p>
      ) : (
        <>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">No</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Link</TableHead>
                <TableHead className="w-[100px]">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedJobs.map((job, index) => (
                <TableRow key={job.id}>
                  <TableCell>
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </TableCell>
                  <TableCell>{job.date}</TableCell>
                  <TableCell>{job.title}</TableCell>
                  <TableCell>
                    <Button variant="link" asChild>
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Job
                      </a>
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setJobToDelete(job.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Confirm Deletion</DialogTitle>
                          <DialogDescription>
                            Are you sure you want to delete this job listing?
                            This action cannot be undone.
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <Button
                            variant="outline"
                            onClick={() => setJobToDelete(null)}
                          >
                            Cancel
                          </Button>
                          <Button
                            variant="destructive"
                            onClick={() =>
                              jobToDelete && deleteJob(jobToDelete)
                            }
                          >
                            Delete
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex justify-center items-center space-x-2 mt-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, pageCount))
              }
              disabled={currentPage === pageCount}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </>
      )}
    </main>
  );
}
