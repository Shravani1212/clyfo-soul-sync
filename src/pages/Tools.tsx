import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { FileText, Mic, Camera, Download, Trash2, Save, Play, Square } from "lucide-react";
import { toast } from "sonner";
import DashboardLayout from "@/components/DashboardLayout";

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

interface Recording {
  id: string;
  name: string;
  duration: number;
  createdAt: string;
  audioUrl: string;
}

const Tools = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("notepad");

  // Notepad State
  const [notes, setNotes] = useState<Note[]>([]);
  const [currentNote, setCurrentNote] = useState<Note | null>(null);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");

  // Recorder State
  const [recordings, setRecordings] = useState<Recording[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);

  // Camera State
  const [cameraActive, setCameraActive] = useState(false);
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/login");
      return;
    }
    try {
      setUser(JSON.parse(storedUser));
      // Load saved notes
      const savedNotes = localStorage.getItem(`notes-${user?.id}`);
      if (savedNotes) setNotes(JSON.parse(savedNotes));
    } catch {
      navigate("/login");
    }
  }, [navigate]);

  // Notepad Functions
  const saveNote = () => {
    if (!noteTitle.trim() || !noteContent.trim()) {
      toast.error("Please enter title and content");
      return;
    }

    const newNote: Note = {
      id: currentNote?.id || Date.now().toString(),
      title: noteTitle,
      content: noteContent,
      createdAt: currentNote?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const updatedNotes = currentNote
      ? notes.map(n => n.id === currentNote.id ? newNote : n)
      : [...notes, newNote];

    setNotes(updatedNotes);
    localStorage.setItem(`notes-${user?.id}`, JSON.stringify(updatedNotes));
    toast.success("Note saved!");
    resetNoteForm();
  };

  const deleteNote = (id: string) => {
    const updatedNotes = notes.filter(n => n.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem(`notes-${user?.id}`, JSON.stringify(updatedNotes));
    toast.success("Note deleted");
  };

  const editNote = (note: Note) => {
    setCurrentNote(note);
    setNoteTitle(note.title);
    setNoteContent(note.content);
  };

  const resetNoteForm = () => {
    setCurrentNote(null);
    setNoteTitle("");
    setNoteContent("");
  };

  // Recorder Functions
  const startRecording = () => {
    setIsRecording(true);
    setRecordingTime(0);
    toast.success("Recording started");
  };

  const stopRecording = () => {
    setIsRecording(false);
    const newRecording: Recording = {
      id: Date.now().toString(),
      name: `Recording ${recordings.length + 1}`,
      duration: recordingTime,
      createdAt: new Date().toISOString(),
      audioUrl: "audio-placeholder",
    };
    setRecordings([...recordings, newRecording]);
    toast.success("Recording saved");
  };

  // Camera Functions
  const takPhoto = () => {
    toast.success("Photo captured!");
    setPhotos([...photos, `photo-${Date.now()}`]);
  };

  if (!user) return null;

  return (
    <DashboardLayout userRole={user.role}>
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-background pt-20">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-cosmic font-bold mb-4">
              Freedom Tools Mastery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Express yourself with Notepad, Recorder, and Camera. Create, capture, and share your consciousness journey.
            </p>
          </div>

          {/* Tool Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            <Button
              variant={activeTab === "notepad" ? "default" : "outline"}
              onClick={() => setActiveTab("notepad")}
              className={activeTab === "notepad" ? "gradient-cosmic text-background" : ""}
            >
              <FileText className="w-4 h-4 mr-2" />
              Notepad
            </Button>
            <Button
              variant={activeTab === "recorder" ? "default" : "outline"}
              onClick={() => setActiveTab("recorder")}
              className={activeTab === "recorder" ? "gradient-cosmic text-background" : ""}
            >
              <Mic className="w-4 h-4 mr-2" />
              Recorder
            </Button>
            <Button
              variant={activeTab === "camera" ? "default" : "outline"}
              onClick={() => setActiveTab("camera")}
              className={activeTab === "camera" ? "gradient-cosmic text-background" : ""}
            >
              <Camera className="w-4 h-4 mr-2" />
              Camera
            </Button>
          </div>

          {/* Notepad Tab */}
          {activeTab === "notepad" && (
            <div className="grid md:grid-cols-3 gap-6">
              {/* Editor */}
              <div className="md:col-span-2">
                <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Create or Edit Note</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <input
                      type="text"
                      placeholder="Note title..."
                      value={noteTitle}
                      onChange={(e) => setNoteTitle(e.target.value)}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                    />
                    <Textarea
                      placeholder="Write your thoughts, ideas, and conscious moments here..."
                      value={noteContent}
                      onChange={(e) => setNoteContent(e.target.value)}
                      className="min-h-64 bg-background border-border focus:border-primary"
                    />
                    <div className="flex gap-2">
                      <Button
                        onClick={saveNote}
                        className="flex-1 gradient-cosmic text-background"
                      >
                        <Save className="w-4 h-4 mr-2" />
                        Save Note
                      </Button>
                      {currentNote && (
                        <Button
                          onClick={resetNoteForm}
                          variant="outline"
                        >
                          Clear
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Notes List */}
              <div>
                <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Your Notes ({notes.length})</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 max-h-96 overflow-y-auto">
                    {notes.length === 0 ? (
                      <p className="text-sm text-muted-foreground">No notes yet. Start creating!</p>
                    ) : (
                      notes.map((note) => (
                        <div
                          key={note.id}
                          className="p-3 bg-background rounded-lg border border-border/50 hover:border-primary/30 transition-all cursor-pointer group"
                          onClick={() => editNote(note)}
                        >
                          <h3 className="font-semibold text-sm truncate">{note.title}</h3>
                          <p className="text-xs text-muted-foreground line-clamp-2">{note.content}</p>
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-xs text-muted-foreground">
                              {new Date(note.updatedAt).toLocaleDateString()}
                            </span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteNote(note.id);
                              }}
                              className="opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      ))
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Recorder Tab */}
          {activeTab === "recorder" && (
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Voice Recorder</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-cosmic-saffron mb-4">
                      {Math.floor(recordingTime / 60)}:{(recordingTime % 60).toString().padStart(2, "0")}
                    </div>
                    {isRecording && (
                      <div className="inline-block w-4 h-4 rounded-full bg-red-500 animate-pulse mb-4"></div>
                    )}
                  </div>

                  <div className="flex gap-3">
                    {!isRecording ? (
                      <Button
                        onClick={startRecording}
                        className="flex-1 gradient-cosmic text-background"
                      >
                        <Mic className="w-4 h-4 mr-2" />
                        Start Recording
                      </Button>
                    ) : (
                      <Button
                        onClick={stopRecording}
                        className="flex-1 bg-red-600 hover:bg-red-700 text-background"
                      >
                        <Square className="w-4 h-4 mr-2" />
                        Stop Recording
                      </Button>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground text-center">
                    Record your thoughts, speeches, or practice your voice clarity.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Saved Recordings ({recordings.length})</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 max-h-96 overflow-y-auto">
                  {recordings.length === 0 ? (
                    <p className="text-sm text-muted-foreground">No recordings yet.</p>
                  ) : (
                    recordings.map((recording) => (
                      <div key={recording.id} className="p-3 bg-background rounded-lg border border-border/50 flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-sm">{recording.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {recording.duration}s • {new Date(recording.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                        <Button size="sm" variant="ghost">
                          <Play className="w-4 h-4" />
                        </Button>
                      </div>
                    ))
                  )}
                </CardContent>
              </Card>
            </div>
          )}

          {/* Camera Tab */}
          {activeTab === "camera" && (
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Camera</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="w-full h-64 bg-background rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                      <p className="text-muted-foreground">Camera Preview</p>
                    </div>
                  </div>

                  <Button
                    onClick={takPhoto}
                    className="w-full gradient-cosmic text-background"
                  >
                    <Camera className="w-4 h-4 mr-2" />
                    Take Photo
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Capture moments during your learning journey. Practice facial expressions and gestures.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Gallery ({photos.length})</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 max-h-96 overflow-y-auto">
                  {photos.length === 0 ? (
                    <p className="text-sm text-muted-foreground">No photos yet. Start capturing!</p>
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      {photos.map((photo) => (
                        <div key={photo} className="aspect-square bg-gradient-cosmic/20 rounded-lg flex items-center justify-center">
                          <Camera className="w-6 h-6 text-muted-foreground" />
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Tools;