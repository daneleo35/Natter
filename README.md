# Natter

Natter is a self-hosted voice and text chat app for groups. It includes a Windows client and server packages for Linux and Windows.

- **Connection limit.** A server starts with a limit of 200 simultaneous clients. The host can set it from 1 to 1,000, the software maximum. Individual channels have their own participant limits.
- **Server storage.** The host stores server accounts, profiles, channels, permissions, chat history, the audit log and shared soundboard clips in PostgreSQL. Uploaded files and shared gameplay clips live in the server’s file directory.
- **Voice encryption.** WebRTC DTLS-SRTP encrypts voice between each client and the server. The server terminates that encryption and can access the audio it routes.

**Joining a friend?** Get the Windows client from the [latest release](https://github.com/daneleo35/Natter/releases/latest), then follow [Join your first server](https://github.com/daneleo35/Natter/wiki/Join-your-first-server).

**Hosting a community?** Follow [Host a Natter server on Linux](https://github.com/daneleo35/Natter/wiki/Host-a-Natter-server-on-Linux). The release also includes a Windows server archive with setup instructions.

## What you can do

- **Voice and text channels.** Join a room to talk, use its chat, or start a thread or direct message where your group has access.
- **Push-to-talk.** Choose **Hold to talk** and bind a global shortcut so you can speak while your game has focus.
- **Channel music.** Queue a supported link or media file for eligible listeners in your current channel and set your own playback volume.
- **Screen sharing.** Share a window or display so people in your channel can choose to watch it.
- **Gameplay clipping.** Save the last 30 to 60 seconds of a buffered window or display, with optional mic and voice-chat tracks.
- **Per-person voice clipping.** Capture a section of channel voice, pick one speaker, and save the trimmed line as a WAV or publish it with soundboard upload permission. Members can opt their own voices out of individual recording on each server.
- **Multitrack editing.** Trim a gameplay replay, adjust or mute individual tracks, and save a new copy or export a WebM with one mixed audio track.
- **Shared soundboards.** Upload short clips and play them to eligible listeners in your channel. Hosts can require review and delegate clip moderation by group.
- **GIFs and stickers.** Add a featured GIF, paste a GIPHY link, or connect your own GIPHY key for catalogue search.
- **Custom profiles.** Set a server display name, avatar, bio, banner, accent, badges and a timed status.
- **Stream Deck controls.** Install the Windows plugin to toggle mic, deafen, soundboard and music and to trigger voice or gameplay captures.
- **Community tools.** Create nested channels, assign groups and permissions, pin useful links and files, and share gameplay clips in the server gallery.

[Read the Natter Wiki](https://github.com/daneleo35/Natter/wiki) for the guides and configurable limits. To list a server in the browser, submit its HTTPS base address in [`servers.json`](https://github.com/daneleo35/Natter/blob/main/servers.json) with the server operator’s permission.

[Natter website](https://officialgamershub.com/Natter/) · [Public release checklist](RELEASE-CHECKLIST.md)
