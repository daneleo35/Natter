<p align="center">
  <img src="https://officialgamershub.com/Natter/assets/natter.png" alt="Natter logo" width="88">
</p>

# Natter

**An all-in-one VoIP and chat app for gaming, friends and communities.**

Talk in voice channels, keep conversations going in chat, share your screen, listen to music together and turn memorable moments into clips. Natter brings voice, text, media and recording tools into one desktop app, with a server you can host yourself.

**[Website](https://officialgamershub.com/Natter/)** · **[Downloads](https://officialgamershub.com/Natter/downloads/)** · **[Releases](https://github.com/daneleo35/Natter/releases)** · **[Full feature list](https://officialgamershub.com/Natter/features/)** · **[Wiki and guides](https://github.com/daneleo35/Natter/wiki)**

![Natter's main workspace, with voice channels, members, tool tabs and a Quick chat conversation](https://officialgamershub.com/Natter/assets/friday-crew.png)

*The Natter workspace, shown with a sample community. Stay in voice while using chat, files, screen sharing and clips.*

## Get Natter

The [latest release](https://github.com/daneleo35/Natter/releases/latest) includes clients and standalone servers. Download links and release notes are also available on the [Natter website](https://officialgamershub.com/Natter/downloads/).

| Package | Platform | Format | Get started |
| --- | --- | --- | --- |
| Desktop client | Windows x64 | EXE installer | [Download](https://github.com/daneleo35/Natter/releases/latest) · [Join a server](https://github.com/daneleo35/Natter/wiki/Join-your-first-server) |
| Desktop client | Ubuntu x64 | DEB package | [Download](https://github.com/daneleo35/Natter/releases/latest) · [Ubuntu instructions](https://officialgamershub.com/Natter/join/#ubuntu-shortcuts-and-saved-sessions) |
| Standalone server | Windows x64 | ZIP archive | [Download](https://github.com/daneleo35/Natter/releases/latest) · [Windows hosting guide](https://github.com/daneleo35/Natter/wiki/Host-on-Windows) |
| Standalone server | Linux x64 | tar.gz archive | [Download](https://github.com/daneleo35/Natter/releases/latest) · [Linux hosting guide](https://github.com/daneleo35/Natter/wiki/Host-a-Natter-server-on-Linux) |

**Joining your friends?** Install the client, choose and test your microphone and headphones, then open **Browse servers**. Pick a listed community or enter the address your host gave you, choose your display name and join a voice channel.

**Hosting your own community?** Use the [Windows](https://officialgamershub.com/Natter/host-windows/), [Linux](https://officialgamershub.com/Natter/host-linux/) or [Docker Compose](https://officialgamershub.com/Natter/host-docker/) guide. You can host on an IP address or a hostname. Direct-IP connections use HTTPS, with a server fingerprint to confirm on first connection.

**Using or building plugins?** In **Settings → Plugins**, choose **Import .natter plugin**, review its permissions, then install and enable it. The API 1 SDK includes the developer handbook, editable projects and compiled examples. [Download the SDK](https://github.com/daneleo35/Natter/releases/latest/download/Natter-Developer-SDK-API-1.zip) · [SHA-256](https://github.com/daneleo35/Natter/releases/latest/download/Natter-Developer-SDK-API-1.zip.sha256) · [Plugin guide](https://github.com/daneleo35/Natter/wiki/Install-and-build-plugins)

## Voice that fits your setup

- **Voice channels and whispers.** Join a room, see who is speaking, or use a whisper shortcut for selected people or channels.
- **Choose when you transmit.** Use voice activation, hold-to-talk, toggle-to-talk or continuous transmission. Adjust automatic sensitivity, a volume gate or hybrid activation.
- **Tune your microphone.** Choose Standard WebRTC suppression, local DeepFilterNet3 AI noise removal, Speex or no suppression. Adjust typing attenuation, gain, echo cancellation and advanced processing when needed.
- **Keep control of playback.** Mute your mic, deafen incoming audio, mute a member locally or adjust their individual volume. Voice, effects, music and shared audio have separate listening controls.
- **Set up privately.** Test your microphone and headphones, calibrate room noise and save named audio setups. Private microphone tests pause channel transmission while you check your sound.

Advanced capture settings include high-pass filtering, noise gating, compression, automatic gain and peak protection. Studio and bypass options are available for microphones processed elsewhere.

<details>
<summary>See the audio setup</summary>

![Natter's guided microphone and audio setup](https://officialgamershub.com/Natter/assets/audio-setup.png)

</details>

## Chat, plans and shared files

Use **server chat**, **channel chat** and **direct messages**, or give a subject its own named thread. Quick chat stays docked below the workspace and can be resized, collapsed or hidden.

In a thread, choose which users or groups can read and which can reply. Type `@` and pick a person or group to highlight a message for them. [Set up thread access and mentions](https://github.com/daneleo35/Natter/wiki/Manage-a-community#choose-who-can-read-and-reply-to-a-thread)

- Send text, paste screenshots, upload images and attach permitted files.
- Browse emoji, featured GIFs and stickers, or paste a GIPHY link. Connect your own GIPHY API key for full catalogue search.
- Create polls, pin useful links and files, and catch up using unread counts and remembered read positions.
- Browse channel and server files, create folders, preview supported media and manage uploads and downloads with progress controls.
- Keep general chat tidy: unthreaded server and channel messages expire after eight hours. Named threads remain until removed; direct-message retention is controlled separately by the host.

## Share a screen, a game or something to watch

Choose a window or display, check your local preview and let people in your voice channel open the share from your **Live** badge. Viewers can use Fit, Fill, fullscreen or a pop-out window.

Quality presets include gameplay sharing up to **1080p60** and **4K60**, alongside Auto and lower-resolution choices. Actual resolution and frame rate depend on the capture source, hardware and connection. Windows display sharing can include system audio when the source and channel permissions allow it.

![Watching a shared game window in Natter](https://officialgamershub.com/Natter/assets/screen-share.png)

**Music and Video** adds a channel queue for supported YouTube and Twitch links and uploaded channel media. Set your own listening volume, use audio-only playback or open **Watch Together**. The session host can pause, seek and skip supported videos; viewers can vote to skip.

Channel media playback needs the host's media tools configured. The [music guide](https://officialgamershub.com/Natter/channel-music/) covers permissions and FFmpeg, ffprobe and yt-dlp requirements.

## Save gameplay and edit the tracks

Keep a **30–60 second replay buffer** for a chosen window or display, then save the moment with **Save replay** or a shortcut. On Windows, automatic detection can start buffering supported games. Optional local laughter detection can trigger a clip after sustained laughter.

Enable your microphone and Natter voice-chat recording to keep speakers on separate tracks, subject to their recording preferences.

![Natter's gameplay editor with a video preview, In and Out handles, coloured speaker tracks and individual volume controls](https://officialgamershub.com/Natter/assets/gameplay-editor.png)

The built-in gameplay editor lets you:

- Drag the **In** and **Out** handles or enter exact times to choose what to keep.
- Scrub the preview, zoom the timeline and loop the selected range.
- Adjust or mute each named, coloured audio track independently.
- Drag a track's volume line, or add volume points to turn down one loud moment.
- Undo and redo volume edits, then save an edited copy while keeping the original.
- Export a WebM with one mixed audio track, or upload a replay to your server's **Shared clips** gallery when permitted.

[Gameplay recording and editing guide](https://officialgamershub.com/Natter/gameplay-clips/)

## Turn a voice line into a soundboard clip

Enable the voice clip recorder, choose your before-and-after capture time and capture a moment from your current channel. In the editor, pick the speaker you want to keep.

![Natter's voice clip editor with speaker selection, waveform trimming, local preview and volume controls](https://officialgamershub.com/Natter/assets/voice-editor.png)

Trim with drag selection or exact times, split at the playhead, remove a mistake and close the gap, or silence a section while preserving its timing. Adjust gain, volume points and fades, normalise the level, then preview locally. Undo, redo and reset keep editing reversible.

Save a **WAV** to your device or publish to the server's soundboard when your role has upload permission. Add a name, category, tags and optional thumbnail. Personal soundboard pages and favourites help organise the clips you use most; **Preview** plays locally and **Play** sends a sound to eligible listeners in your current channel.

Hosts can require approval for new sounds and delegate review, editing and deletion separately. Members can turn off **Allow voice recording** in their server profile to opt out of individual capture in current Natter clients. External recorders and system-audio capture can still pick up playback.

[Voice clips and soundboard guide](https://officialgamershub.com/Natter/voice-clips/)

## Make the space your own

- **Profiles:** avatars, bios, uploaded or preset banners, accent colours, personal badges and automatically expiring statuses.
- **Layouts:** reorder and pin tabs, choose what opens on launch and keep separate main-monitor and narrow side-monitor layouts.
- **Appearance:** colour themes, readable status indicators and compact group and personal badges.
- **Notifications:** choose your own local sounds, use quiet mode and configure muted-microphone warnings. Natter ships without bundled notification sounds.
- **Local accounts:** optionally keep settings, bookmarks and saved credentials together, with encrypted account-backup export and import.

## Windows desktop integrations

Install the **Stream Deck plugin** from **Settings → Integrations** to add microphone, audio/deafen, soundboard and music toggles, plus voice-capture and gameplay-clip buttons. Keys show their current state. Elgato Stream Deck software 7.1 or later is required.

Windows also supports global shortcuts, automatic game detection, system-audio capture and tray controls. On Ubuntu, shortcuts work while Natter is focused, and capture depends on the desktop's available screen-sharing support. The [join guide](https://github.com/daneleo35/Natter/wiki/Join-your-first-server) explains platform-specific setup and updates.

## Run a community on your own server

Create nested permanent or temporary channels, set default and away rooms, and customise names, topics, descriptions, icons and pictures. Use passwords, account or group access rules, participant limits and talk power to control each room.

Give a guest or group access to a single room without sharing its password or lowering its join power. [Set up room access grants](https://github.com/daneleo35/Natter/wiki/Manage-a-community#give-a-person-or-group-access-to-one-room)

Custom ranked groups and individual overrides let you delegate voice, chat, file, soundboard, music and screen-sharing permissions. Moderation includes moving or muting members, channel and server kicks, timed bans, an audit log and server analytics.

The server defaults to **200 simultaneous connections**, configurable from **1 to 1,000**. Rooms have separate participant limits, and reserved slots can be assigned by permission. Practical capacity depends on the host's hardware and bandwidth. File, soundboard and shared-clip storage limits are configurable too.

To make a server discoverable, the owner can enable **Public server** under **Manage virtual server → Host**. The directory checks that its HTTPS address is reachable before listing it. Unlisted communities can still connect directly by address.

On a guided host, the server owner can check for signed updates under **Manage virtual server → Host → Server updates**, then restart immediately or wait until everyone leaves. Hosts running 2.4 need one manual upgrade before using these controls. [Update a Natter server](https://github.com/daneleo35/Natter/wiki/Update-a-Natter-server)

[Community management](https://github.com/daneleo35/Natter/wiki/Manage-a-community) · [Hosting guides](https://officialgamershub.com/Natter/guides/#hosting)

## Where data lives and how connections are protected

The host stores server accounts, profiles, channels, permissions, chat history, soundboard uploads and metadata in **PostgreSQL**. Uploaded files and shared gameplay clips live in the server's file directory. Local settings, private edit drafts and unshared replays stay on your device until you save or share them.

Remote sign-in, chat and connection setup use **HTTPS and secure WebSockets**. Voice, whispers and screen-sharing media use **WebRTC DTLS-SRTP between each client and the server**. The server terminates those encrypted connections and can access the media it routes; this is not end-to-end encryption.

[Connections, storage and encryption](https://github.com/daneleo35/Natter/wiki/Connections-storage-and-encryption)

## Explore, download and get help

- **[Natter website](https://officialgamershub.com/Natter/):** screenshots, features, downloads and setup guides.
- **[GitHub Releases](https://github.com/daneleo35/Natter/releases):** client and server packages, release notes and checksums.
- **[Natter Wiki](https://github.com/daneleo35/Natter/wiki):** joining, hosting, recording, permissions and community management.
- **[Report a bug or request a feature](https://github.com/daneleo35/Natter/issues):** include your Natter version, operating system and steps to reproduce a problem. Keep recovery keys, passwords and private server details out of public reports.
