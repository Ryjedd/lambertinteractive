using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlanetGravity : MonoBehaviour {

    public float gravity = -50f;
	
	// Update is called once per frame
	public void Attract (Transform body) {
        Vector3 gravityUp = (body.position - transform.position).normalized * 5f;
        Vector3 bodyUp = body.up;

        body.GetComponent<Rigidbody>().AddForce(gravityUp * gravity);

        Quaternion targetRotation = Quaternion.FromToRotation(bodyUp, gravityUp) * body.rotation;
        body.rotation = Quaternion.Slerp(body.rotation, targetRotation, 50 * Time.deltaTime);
        /*
        Vector3 groundNormal = transform.position - planet.transform.position;
        gravityForce = 9.8f * ((planetMass * 25.0f) / (groundNormal).magnitude);
        GetComponent<Rigidbody>().AddForce(-((groundNormal).normalized * gravityForce));
        Vector3 forwardsVector = -Vector3.Cross(groundNormal, transform.right);
        transform.rotation = Quaternion.LookRotation(forwardsVector, groundNormal);
       */
    }


}
