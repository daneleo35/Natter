Natter 3.2.0 administration revision · Plugin API 1

Plugin authors can run inspect-channel.mjs with Node.js 24 or newer. The
Integrations page explains how to share a channel, scope the token, supply the
four environment variables, and read the result.

These files are the documentation build inputs for revision c25f7c531756.
handbook-permissions.patch supplies example expressions for the user, permission,
revision and changes arguments in the workflow reference. The HTML fragment
adds the external integration example to the handbook. Neither changes runtime
permissions. The published SDK includes these inputs under plugin-development/revision.

To reproduce the SDK from runtime source 942f317328f5abdfd3c3c8e23efd004b1a469a44,
install the checkout's locked dependencies and run these commands at its root.
Replace PATH_TO_REVISION with the folder containing this README. Use an output
directory that does not already exist. Git, tar, Node.js 24 and Python 3 are needed.

node PATH_TO_REVISION/build-handbook.mjs output-sdk
python PATH_TO_REVISION/archive-sdk.py output-sdk Natter-Developer-SDK-API-1.zip

The build checks the patch and applies it to a temporary copy of the handbook
generator. The archive normalizes timestamps and the ordering of nested SDK sources.
