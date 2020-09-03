// QE

var qe = app.enableQE();

// global QE properties/methods
qe.exit();
qe.getSequencePresets();
qe.language;
qe.location;
qe.name;
qe.newProject();
qe.open();
qe.outputToConsole();
qe.platform;
qe.startPlayback();
qe.stop();
qe.stopPlayback();

// qe.project
var qeProj = qe.project;
qeProj.close();
qeProj.currentRendererName;
qeProj.deletePreviewFiles();
qeProj.flushCache();
qeProj.getAudioEffectByName();
qeProj.getAudioEffectList();
qeProj.getAudioTransitionByName();
qeProj.getAudioTransitionList();
qeProj.getBinAt();
qeProj.getItemAt();
qeProj.getSequenceAt();
qeProj.getSequenceItemAt();
qeProj.getVideoEffectByName();
qeProj.getVideoEffectList();
qeProj.getVideoTransitionByName();
qeProj.getVideoTransitionList();
qeProj.import();
qeProj.importAEComps();
qeProj.importAllAEComps();
qeProj.importFiles();
qeProj.importProject();
qeProj.name;
qeProj.newBarsAndTone();
qeProj.newBin();
qeProj.newBlackVideo();
qeProj.newCaption();
qeProj.newSequence();
qeProj.newTransparentVideo();
qeProj.numBins;
qeProj.numItems;
qeProj.numSequenceItems;
qeProj.numSequences;
qeProj.path;
qeProj.redo();
qeProj.undo();

// qe.source
var qeSource = qe.source;
qeSource.clearInPoint();
qeSource.clearOutPoint();
qeSource.duration;
qeSource.filePath;
qeSource.name;
qeSource.setAudioInPoint();
qeSource.setAudioOutPoint();
qeSource.setDuration();
qeSource.setInPoint();
qeSource.setOutPoint();
qeSource.setVideoInPoint();
qeSource.setVideoOutPoint();
